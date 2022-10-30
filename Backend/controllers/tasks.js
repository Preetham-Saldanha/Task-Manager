const Task = require("../Models/Task")
const User = require("../Models/User")

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
        // res.send("Activated")
    }
    catch (error) {
        res.status(500).json({ msg: error })
    }
    // console.log("inch incha")
}

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID })
        // console.log("hello world")
        if (!task) {
            return res.status(404).json({ msg: `no task with id :${taskID}` })
        }

        res.status(200).json({ task })

    }
    catch (error) {
        res.status(500).json({ msg: error })
    }

}

const createTask = async (req, res) => {
    console.log()
    try {
        console.log("dala ijji")
        const task = await Task.create(req.body)

        res.status(201).json({ task })
    }
    catch (error) {
        res.status(500).json({ msg: error })
    }

}

const updateTask = async (req, res) => {
    try {
        const { id: taskId } = req.params;

        const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
            new: true,
            runValidators: true
        })


        if (!task) {
            return res.status(404).json({ msg: error });
        }

        res.status(200).json(task);

    } catch (error) {
        res.status(500).json({ msg: error })
    }


    // res.send(`This is an update for ${req.params.id}`)
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `No task with id ${taskID}` })
        }
        res.status(200).json({ task })
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getTask
}

