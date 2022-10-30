import React, { useEffect, useState } from 'react'
import Header from '../Header.js'
import axios from 'axios'

function Mytasks() {

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("http://localhost:5000/mytasks")
      setTasks(response.data);
    }
    fetchdata();
  }, []);

  return (
    <>
      <Header />
    </>
  )
}

export default Mytasks