require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive')

let sc = require('./simulation_controller/simulation_controller')
const app = express()
app.use(bodyParser.json())

app.use(session({
    secret: process.env.SESSION_SECRETS,
    resave: false,
    saveUninitialized: true
}))

const {
    NODE_PORT,
    CONNECTION_STRING
} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db',db)
})

// app.post('/api/login', sc.login)
app.post('/api/register', sc.register)
app.post('/api/posts', sc.post)



app.listen(NODE_PORT, ()=>{
    console.log(`Listening on port ${NODE_PORT}`)
})