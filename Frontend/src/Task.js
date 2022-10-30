import React from 'react'
import './Task.css';
import './Login.css'
import axios from 'axios';
import { useState } from 'react';
import { useContext } from 'react';
import { TasksContext } from './Contexts/TasksState';

function Task() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [date, setDate] = useState(new Date)
  const taskState = useContext(TasksContext)

  const submit = async (e) => {
    e.preventDefault()
    const postFlag = window.confirm("confirm task creation?");

    const data = {
      "title": title,
      "description": description,
      "date": date
    }

    try {
      if(postFlag){
        const postedTask = await axios.post("/api/v1", data)
        taskState.setTasks([...taskState.tasks, postedTask.data.task])
        setTitle("")
        setDescription("")
        setDate(new Date)
      }
     
    }
    catch (error) {
      console.log(error)
    }

  }

  const clearForm = (e) => {

    setTitle("")
    setDescription("")
    setDate(new Date)
  }

  return (
    <div className="task">

      <form action="" id='task_form' onSubmit={submit}>
        <div></div>
        <label htmlFor="">Title</label>
        <input type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="">Add description here</label>
        <textarea  id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <label>Select date here</label>
        <input type="date" id='date' value={date} onChange={(e) => setDate(e.target.value)} />

        <div className='task_btns'>
          <button id='ok_btn' className='submit_btn' onClick={submit}>OK</button>
          <button id='Cancel_btn' type='submit' className='submit_btn' onClick={clearForm}>Cancel</button>
        </div>

      </form>

    </div>
  )
}

export default Task