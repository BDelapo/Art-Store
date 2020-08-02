const express = require('express')
const { response } = require('express')
const app = express()

const port = 5000

app.get('/', (req, res) =>{

    return res.send("This is a test")
})

app.listen(port, ()=>{
    console.log('Server is up and listening on port '+ port)
})