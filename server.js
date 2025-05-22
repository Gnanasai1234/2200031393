const express=require('express');
const mongoose=require('mongoose')

const dburl="mongodb://localhost:27017/"

mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)
});


const app = express() 
app.use(express.json()) 

