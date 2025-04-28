const connectToDB = require('./database')
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors')
const contactRouter = require('./routes/contact.router')
connectToDB()


app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
  res.send('Hello World')
})

app.use('/api/auth', contactRouter)


app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`)
})


