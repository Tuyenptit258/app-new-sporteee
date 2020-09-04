const express = require('express')

const app = express()

app.use('/', (req,res)=>{
    res.json('Hello')
})

app.listen(process.env.PORT, function(){
   // res.json('Start on')
})