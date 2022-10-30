
import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react';
import "./Card.css"
import { TasksContext } from './Contexts/TasksState'

function Card(props) {

    // const yeno = new Date();
    // console.log(type(props.date))
    const tasksState = useContext(TasksContext);
    const [editTaskFlag, setEditTaskFlag] = useState(false);
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const editTask = async () => {
        const taskData = {
            title: title,
            description: description,
            date: props.date,
        }
        try {

            let updatedTask = await axios.put(`/api/v1/Navcomponents/Mytasks/${props.id}`, taskData)
            // console.log(updatedTask)


            let newTasks = []
            tasksState.tasks.forEach((task) => {
            //   console.log(updatedTask.data._id  ===task._id)

                if (updatedTask.data._id === task._id) {
                    // console.log(updatedTask.data._id)
                    newTasks.push(updatedTask.data)
                }
                else{
                    newTasks.push(task)
                }
           
            })

            // let newTasks = await tasksState.tasks.forEach((task, index) => {
            //     if (updatedTask.data._id === task.id) {
            //         tasksState.tasks[index] = updatedTask.data
            //     }
            // });



            setEditTaskFlag(false)
            // below code wont be executed untill await is completed
            tasksState.setTasks(newTasks);
        }
        catch (error) {
            console.log(error)
        }


    }

    const activateEditTask = () => {
        if (!editTaskFlag) {
            setEditTaskFlag(true);
            return
        }
        editTask()
    }

    const deleteTask = async () => {
        if (editTaskFlag) {
            setEditTaskFlag(false);
            return;
        }
        let deleteFlag = window.confirm('are you sure you want to delete this task?');
        try {
            if (deleteFlag) {
                let newTasks = [];
                const deletedTask = await axios.delete(`api/v1/Navcomponents/Mytasks/${props.id}`)


                newTasks = await tasksState.tasks.filter((task) => {
                    return task._id !== deletedTask.data.task._id;
                })
                // below code wont be executed untill await is completed
                tasksState.setTasks(newTasks);

            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='card'>
            <div className='card_top'>
                {!props.completed ? <p className='complete_element' style={{ "color": "red" }}>INCOMPLETE</p> : <p className='complete_element' style={{ "color": "green" }}>COMPLETE</p>}
                <p className="date">{props.date && props.date.substring(0, 10)}</p>
            </div>

            <div className="content">

                {editTaskFlag ? <p><input type="text" className='titleInput editInput' placeholder='Enter title here' value={title} onChange={(e) => { setTitle(e.target.value) }} /></p> : <h3 className="title">{props.title}</h3>}
                {editTaskFlag ? <p><textarea type="text" className='descriptionInput editInput' placeholder='Enter description here' value={description} onChange={(e) => { setDescription(e.target.value) }} /></p> : <p className='description' >{props.description}</p>}

            </div>

            <div className="card_bottom">
                {/* <input type={"checkbox"} value={"true"} /> */}

                <div className='btn_container'>
                    <button className="card_btn" style={{ backgroundColor: "rgb(108, 190, 190)" }} onClick={activateEditTask}>{editTaskFlag ? "Confirm" : "Edit"}</button>
                    <button className="card_btn" style={{ backgroundColor: "rgb(250, 124, 107)" }} onClick={deleteTask}>{editTaskFlag ? "Cancel" : "Delete"}</button>
                </div>
            </div>
        </div>
    )
}

export default Card