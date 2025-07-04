const mongoose = require('mongoose')

//use to add all data of '.env file' in process object
require('dotenv').config();

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then( ()=> console.log('Database Connected') )
    .catch( (error)=> {
        console.log('Error on connecting database')
        console.error(error.message);    
        process.exit(1);
    })
} 

module.exports = dbconnect;
 