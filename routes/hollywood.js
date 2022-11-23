const express = require("express");
const data=require('../database/db');
const  hollywood= express.Router();

const Hollywood=[];
for(let i=0; i<data.length; i++){
    if(data[i].category=="Hollywood"){
        Hollywood.push(data[i])
    }
}
hollywood.get('/hollywood',(req,res)=>{
    res.send(Hollywood);
    res.end();
})

module.exports=hollywood;