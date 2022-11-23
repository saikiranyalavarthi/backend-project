const express=require('express');
const data=require('./database/db')
const bollywood=require('./routes/bollywood');
const hollywood=require('./routes/hollywood');
const technology=require('./routes/technology');
const food=require('./routes/food');
const fitness=require('./routes/fitness');

const app=express();

app.get('/',(req,res)=>{
    res.send(data);
    res.end();
})

app.use(bollywood);
app.use(hollywood);
app.use(technology);
app.use(food);
app.use(fitness);


app.listen(6500)