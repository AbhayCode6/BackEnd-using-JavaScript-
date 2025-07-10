const express = require('express')
const path = require('path')
//It imports the Express module from node_modules

const app = express()  
//express() initializes and returns a server object, which we store in the variable app.

app.get('/',(req,res)=>{
    res.send("Hello From the Server: ")
    /* res.send() :-- It automatically set the header accordig to content type..
        it Stringify the data..
        it can send any type of data to the frontend and also end the response cycle..

    */
    req.json({"name":"Abhay"})  //req.json() Strictly allow json data to send on frontend.
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'login.html')) //it automatically end the life cycle
})                                                  // after the response


app.listen(3000, () => {
    console.log("Server Started Using ExpressJS")
})