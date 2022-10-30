

const express = require("express")
const router = express.Router()
const { getAllTasks, createTask, deleteTask, updateTask , getTask} = require("../controllers/tasks")

router.route("/api/v1").post(createTask)
router.route("/api/v1/Navcomponents/Mytasks").get(getAllTasks)
router.route("/api/v1/Navcomponents/Mytasks/:id").delete(deleteTask)
router.route("/api/v1/Navcomponents/Mytasks/:id").put(updateTask)
router.route("/api/v1/Navcomponents/Mytasks/:id").get(getTask)


module.exports = router




