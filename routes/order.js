var express = require('express');
var router = express.Router();
const {v4:uuidv4}=require('uuid');
const dbClient=require('../db/postgres');

/* GET home page. */
orderRouter=express.Router()

orderRouter.get('/',async(req,res)=>{

    const queryText='select * from foodorder;'
    const queryValues=[]

    try{
        await dbClient.connect()

        const result=await dbClient.query(queryText,queryValues)

        res.status(200).send({
            message:Array.from(
                result.rows,(row)=>{
                    const {id,foodid,userid,date}=row
                    return {id,foodid,userid,date}
                }
            )
        })
    }catch(e){
        console.log(e)
        res.status(500).send()
    }
    return
})

orderRouter.post('/',async(req,res)=>{
  const id=uuidv4()

  const {foodid,userid,date}=req.body

  const queryText='insert into foodorder (id,foodid,userid,date) values($1,$2,$3,$4);'
  const queryValues=[id,foodid,userid,date]

  var client
  try{
      client=await dbClient.connect()
      await client.query('BEGIN')

      const result=await client.query(queryText,queryValues)
      await client.query('COMMIT')

      res.status(200).send({message:"Success"})
  }catch(e){
      console.log(e)
      client.query('ROLLBACK',(err)=>null)
      res.status(500).send({
          message:"Server Error"
      })
  }finally{
      if (client){
          client.release()
      }
  }
  return
})


module.exports = orderRouter;
