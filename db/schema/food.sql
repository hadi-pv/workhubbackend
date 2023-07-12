CREATE TABLE food (
    id serial PRIMARY KEY,
    name text,
    ftype text,
    description text,
    imgsrc text,
    CONSTRAINT chk_limited_ftype CHECK (ftype IN ('veg', 'nonveg'))
);

insert into food (name,ftype,description,imgsrc) values ('veg1','veg','It is a veg food','');
insert into food (name,ftype,description,imgsrc) values ('veg2','veg','It is a veg food','');
insert into food (name,ftype,description,imgsrc) values ('veg3','veg','It is a veg food','');
insert into food (name,ftype,description,imgsrc) values ('veg4','veg','It is a veg food','');
insert into food (name,ftype,description,imgsrc) values ('nonveg1','nonveg','It is a nonveg food','');
insert into food (name,ftype,description,imgsrc) values ('nonveg2','nonveg','It is a nonveg food','');
insert into food (name,ftype,description,imgsrc) values ('nonveg3','nonveg','It is a nonveg food','');
insert into food (name,ftype,description,imgsrc) values ('nonveg4','nonveg','It is a nonveg food','');