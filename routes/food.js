const express = require("express");
const data=require('../database/db');
const food = express.Router();

const Food=[];
for(let i=0; i<data.length; i++){
    if(data[i].category=="Food"){
        Food.push(data[i])
    }
}
food.get('/food',(req,res)=>{
    res.send(Food);
    res.end();
})

module.exports=food;