const express = require("express");
const data=require('../database/db');
const technology = express.Router();

const Technology=[];
for(let i=0; i<data.length; i++){
    if(data[i].category=="Technology"){
        Technology.push(data[i])
    }
}
technology.get('/technology',(req,res)=>{
    res.send(Technology);
    res.end();
})

module.exports=technology;