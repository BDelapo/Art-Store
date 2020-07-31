const express = require('express')
const { response } = require('express')
const app = express()

app.get('/', (req, res) =>{

    return res.send("This is a test")
})

app.listen(3001, ()=>{
    console.log('server is up and listening on port 3001')
})