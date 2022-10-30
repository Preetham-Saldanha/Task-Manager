import React, { useRef, useState } from 'react'
import "./Login.css"

function Login() {
    const [name,setName]  = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const btn = useRef();
    const loginForm = useRef();
    const regForm = useRef();

    function login_highlight() {

        btn.current.style.left = "33.5px";
        loginForm.current.style.left = "63px";
        regForm.current.style.left = "190px";
    }

    function register_highlight() {
        btn.current.style.left = "166.5px";
        loginForm.current.style.left = "-190px";
        regForm.current.style.left = "-107px";
    }

    return (
        <>
            <div className='signin_page'>
                <div className='btn' ref={btn}></div>

                <div className="login_head">
                    <button type="button" className='login_head_btn' onClick={login_highlight}>Login</button>
                    <button type="button" className='login_head_btn' onClick={register_highlight}>Register</button>
                </div>

                <div className="form_box ">
                    <form action="" >
                        <div className="login_form form" ref={loginForm} >
                            <label>Email</label>
                            <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} />
                            <br/>
                            <br/>
                            <label>Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <br/>
                            <button type='submit' className='submit_btn'> Login</button>   
                        </div>
                    </form>

                    <form action="" >
                        <div ref={regForm} className='register_form form' >
                            <label>Username</label>
                            <input type="text" value ={name}  onChange={(e) => setName(e.target.value)}/>
                            <br/>
                            <label>Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <br/>
                            <label>Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <br/>
                            <button type='submit' className='submit_btn'> Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Login