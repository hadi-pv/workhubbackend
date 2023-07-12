var express = require('express');
var router = express.Router();
const {v4:uuidv4}=require('uuid');
const dbClient=require('../db/postgres')

/* GET home page. */
foodRouter=express.Router()

foodRouter.get('/',async(req,res)=>{

    const queryText='select * from food;'
    const queryValues=[]

    try{
        await dbClient.connect()

        const result=await dbClient.query(queryText,queryValues)

        res.status(200).send({
            message:Array.from(
                result.rows,(row)=>{
                    const {id,name,ftype,description,imgsrc}=row
                    return {id,name,ftype,description,imgsrc}
                }
            )
        })
    }catch(e){
        console.log(e)
        res.status(500).send()
    }
    return
})

module.exports=foodRouter;