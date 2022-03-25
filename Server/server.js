import express  from "express";
import mongoose from "mongoose";

import data from "./data.js";
import Videos from './dbModel.js' 

//app config
const app = express()
const port = process.env.PORT || 9000  

//middlwares
app.use(express.json())
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Headers','*')
    next()

})

//DB config
const connection_url = 'mongodb://localhost/tiktok_clone_db'
mongoose.connect(connection_url,{})


//api endpoints
app.get('/',(req,res) => res.status(200).send('hello world')) 

app.get('/v1/posts',(req,res) => res.status(200).send(data))

app.get('/v2/posts',(req,res) => {
    Videos.find((err,data) => {
        if (err) {
            res.status(500).send(err)   
        }else{
            res.status(201).send(data)
        }    
    })
})

app.post('/v2/posts',(req,res) => {
    //POST request is to add data to the database
    //It will let use ADD a video DOCUMENT to the videos COLLECTION 
    const dbVideos = req.body
    Videos.create(dbVideos,(err,data) => {
        if (err) {
            res.status(500).send(err)   
        }else{
            res.status(200).send(data)
        }     
    })
})

//listen
app.listen(port,() => console.log(`Listen on localhost: ${port}`)) 