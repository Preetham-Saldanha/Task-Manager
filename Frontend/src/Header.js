import React, { useEffect } from 'react'
import { useState } from 'react'
import './Header.css'
import { Outlet, Link } from "react-router-dom";


function Header() {


    const [date, setDate] = useState(new Date());



    // const tick=()=> {
    //     setDate(new Date());
    // };


    // useEffect(() => {
    //     const timeId = setInterval(tick, 1000)
    //     return clearInterval(timeId);
    // })




    return (
        <div className='header'>
            <div className='header_name'>Preetham Saldanha</div>

            <div className='header_menu'>
                <ul className='header_menu_items'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Navcomponents/Mytasks">My Tasks</Link>
                    </li>
                    <li>
                        <Link to="/Navcomponents/Duetasks">Due Tasks</Link>
                    </li>
                    <li>
                        <Link to="/Navcomponents/Completedtasks"> Completed Tasks</Link>
                    </li>
                    <li>
                        <Link to="/Navcomponents/Incompletetasks"> Incomplete Tasks</Link>
                    </li>
                </ul>
            </div>



            <div className='header_dateDetails' >
                <p id='header_date'>
                    {date.toDateString()}
                </p>
                {/* <p>
                    {date.toLocaleTimeString()}
                </p> */}

            </div>
<Outlet/>
        </div>
    )
}

export default Header