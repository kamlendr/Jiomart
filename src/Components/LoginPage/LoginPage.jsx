import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Login } from '../../Redux/Login/action'
import style from "./login.module.css"
import {Redirect} from "react-router-dom"
export const LoginPage = () => {

    const [email,setEmail] = useState("")
    const [password,setpassword] = useState("")
    const isAuth  = useSelector(state=>state.Auth.isAuth)
    const dispatch = useDispatch()
   
    console.log(isAuth)
    const handleLogin=()=>{
        dispatch(Login({email,password}))
        setEmail("")
        setpassword("")
        console.log(isAuth)
    }

  
   return <> {isAuth ?(<Redirect to="/"/>) : (<> 
        <div >
            <div className={style.MainLogin}>
                <div>
                    <img src="https://www.jiomart.com/msassets/images/login-banner.jpg" alt="arun" />
                </div>
                <div>
                    
                    <h3>Sign in</h3>
                    <p>Sign in to access your Orders, Offers and Wishlist</p>
                    <div className={style.loginInput}>
                       
                        <input onChange={e=>setEmail(e.target.value)} value={email}  placeholder="Enter your Email..." type="text" /> <br />
                     <br /> <input onChange={e=>setpassword(e.target.value)} value={password} placeholder="Enter your Password..." type="password" />
                    </div>
                    <button onClick={handleLogin}>  {'>'} </button>
                </div>
            </div>
            <div className={style.bottomtext}>
                <p>By continuing you agree to our <a  href="#">Terms of service</a> </p>
                <p>and <a href="#">Privacy & Legal Policy.</a > </p>
            </div>
        </div>
   
    </>)  
    }
    </>
}

export default LoginPage
