const todo = require('../models/todoModels')

exports.deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;

        const todoitem = await todo.findByIdAndDelete({_id:id});
        res.status(200).json({
            success:true,
            data:todoitem,
            message:`Todo ${id} deleted Successfully`
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            data:`internal server error`,
            message:error.message
        })
    }
}