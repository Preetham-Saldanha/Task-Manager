
const connectDB = require("./db/connect")
const express = require("express");
const app = express()
// const tasks = require("./routes/tasks")
const home = require("./routes/home")
const not_found=require("./middleware/not-found")

require('dotenv').config();

app.use(express.json())

// app.use("/", tasks)
app.use("/", home)

app.use(not_found)
const port = process.env.PORT || 5000

const server = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => { console.log(`listening on port ${port}`) })
    }
    catch {
        console.log("Connection to db failed!")
    }
}

server()

