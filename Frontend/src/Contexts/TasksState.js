import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const TasksContext=createContext();

const TasksState =(props)=>{
    const [tasks, setTasks] =useState([]);

    return (
        <TasksContext.Provider value={{tasks,setTasks}}>
            {props.children}
        </TasksContext.Provider>
    )
}

export default TasksState;