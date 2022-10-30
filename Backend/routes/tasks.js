
const express = require("express")
const router = express.Router()
const { getAllTasks } = require("../controllers/tasks")
// const operations =require("./controllers/operations")



router.route("/Navcomponents/Mytasks")
  .get(getAllTasks)


module.exports = router