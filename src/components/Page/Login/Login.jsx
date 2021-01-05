import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Login/Login.css'

const Login = () => {

        const isLogin = sessionStorage.getItem('isLogin')
 


    const [inputData, setInputData] = useState({
        email : "",
        password : "",
    })


    const handleLogin = (e) =>{
        e.preventDefault()
        fetch("http://rangsapp.herokuapp.com/login", {
            method : "POST",
            mode : "cors",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(inputData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.accessToken){
                alert("Login berhasil")
                sessionStorage.setItem('isLogin', true)
                sessionStorage.setItem("user", inputData.email)
                window.location.href = '/'
            }
            else{
                alert(data)
            }
        })
    }



    return(
        <>
        {isLogin ? window.location.href = '/' : (
            <>
            <div className="loginContainer">
            <form className="loginBox" onSubmit={handleLogin}>
                    <h3 className="LoginHeader">
                        Login
                    </h3>
                        <label htmlFor="PhoneNumber" className="PhoneNumber">Email</label>
                        <input id="PhoneNumber" type="email" className="PhoneNumberInput" onChange={(e)=>{
                            setInputData({
                                ...inputData,
                                email : e.target.value
                            })
                            console.log(inputData)

                        }}/>
                        <label htmlFor="Password" className="Password">Password</label>
                        <input type="password" id="Password" className="PasswordInput" autoComplete="false" onChange={(e) => {
                            setInputData({
                                ...inputData,
                                password : e.target.value
                            })
                            console.log(inputData)
                        }} />
                        <a href="#" className="forgotPassword">Lupa Password?</a>
                        <button type="submit" className="btnLogin">Login</button>
                        <h3 className="accountText">Belum Punya Akun?</h3>
                        <Link to="/register" className="toRegister">Register Disini</Link>
            </form>
        </div>

        <section className="login">
            <div className="bgLogin1"></div>
            <div className="bgLogin2"></div>
        </section>
        </>
        )}
        
        </>
    )
}

export default Login