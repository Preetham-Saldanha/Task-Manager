import React from 'react'
import Task from './Task'
import Header from './Header'
import Card from './Card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import "./Home.css"
import { useContext } from 'react'
import  { TasksContext } from './Contexts/TasksState'

function Home() {

  // const [data, setData] = useState([])

  const taskState = useContext(TasksContext)

  useEffect(

    () => {
      async function getData() {
        const taskData = await axios.get("api/v1/Navcomponents/Mytasks")
        // console.log(taskData.data.tasks)
        // setData(taskData.data.tasks)
        taskState.setTasks(taskData.data.tasks)
      }
      getData()
    }, [])

  return (
    <div>
      <Header />
      <Task />
      <div className='task_container'>

        {taskState.tasks.map((task) => { return <Card key={task._id} id={task._id} title={task.title} date={task.date} completed={task.completed} description={task.description} /> })}

      </div>

      {/* <Card /> */}
    </div>
  )
}

export default Home