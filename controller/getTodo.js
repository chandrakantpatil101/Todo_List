const todo = require('../models/todoModels')

exports.getTodo = async(req ,res) => {
    try {
        //feting all data
        const todos = await todo.find({})

        //responce
        res.status(200).json({
            success:true,
            data:todos,
            message:"All todos fetched"
        })
    } catch (error) {
        console.error(error);
        
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        })
   }
}

exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const todoitem = await todo.findById({_id:id})

        //if todo not found 
        if(!todoitem){
            return res.status(404).json({
                success:false,
                message:"No data found with given Id",
            })
        }

        //if todo found
        res.status(200).json({
            success:true,
            data:todoitem,
            message:`Todo ${id} data fetched successfully`
        })
        
    } catch (error) {
        console.error(error);
        
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        })
    }
}