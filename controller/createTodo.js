const todo = require('../models/todoModels')

exports.createTodo = async(req, res) => {
    try{
        //excract data from request
        const {title, description} = req.body;
        //create new todo object and insert into database
        //.create() use to insert
        const todoData = await todo.create({title, description});
        //send json data with success flag
        res.status(200).json(
            {
                success:true,
                data:todoData,
                message:"Entry Created Successfully"
            }
        ) 
    }
    catch(err){
        console.log(err)
        console.error(err);
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:err.message
            }
        )
    }
}