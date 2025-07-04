const todo = require('../models/todoModels')

exports.updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const {title, description} = req.body;


        const todoitem =await todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updatedAt:Date.now()}
        )

        res.status(200).json({
            success:true,
            data:todoitem,
            message:`Todo ${id} updated successfully`
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            data:`internal server error`,
            message:error.message
        })
    }
}