const express = require('express')
const app = express();


//middleware to parse JSON
app.use(express.json())


// import todo routes from routes
const todoroutes = require('./routes/todoRoutes')
// mount the todo API routes
app.use('/api/v1',todoroutes)


//loading config from env file
require('dotenv').config();
const PORT = process.env.PORT || 4000


//start server
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})


//db connection 
const dbconnect = require('./config/database')
dbconnect();


//default route
app.get('/', (req, res)=>{
    res.send("This is Homepage")    
})