const express = require("express");
const data=require('../database/db');
const bollywood = express.Router();

const Bollywood=[];
for(let i=0; i<data.length; i++){
    if(data[i].category=="Bollywood"){
        Bollywood.push(data[i])
    }
}
bollywood.get('/bollywood',(req,res)=>{
    res.send(Bollywood);
    res.end();
})
module.exports=bollywood;