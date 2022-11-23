const express = require("express");
const data=require('../database/db');
const  fitness= express.Router();

const Fitness=[];
for(let i=0; i<data.length; i++){
    if(data[i].category=="Fitness"){
        Fitness.push(data[i])
    }
}
fitness.get('/fitness',(req,res)=>{
    res.send(Fitness);
    res.end();
})

module.exports=fitness;