import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'


const Register = () => {
    const isLogin = sessionStorage.getItem('isLogin')
    const [same,setSame] = useState(false)

    const [inputData, setInputData] = useState({
        email : "",
        username : "",
        password : "",
        password2 : ""
    })

    useEffect(()=>{
        if(inputData.password === inputData.password2){
            setSame(false)
        }
        else{
            setSame(true)
        }
    }, [inputData])

    const handleRegister = (e) =>{
        e.preventDefault()
        fetch("http://localhost:5000/register", {
            method : "POST",
            mode : "cors",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email : inputData.email,
                username : inputData.username,
                number : inputData.number,
                password : inputData.password
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.accessToken){
                alert("registrasi berhasil")
                window.location.href = '/login'
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

            <div className="registerContainer">
            <form className="registerBox" onSubmit={handleRegister}>
                    <h3 className="RegisterHeader">
                        Register
                    </h3>

                    <label htmlFor="usernames" className="usernames">Email</label>
                    <input  id="usernames" type="email" className="PhoneNumberInputs" onChange={(e)=>{
                        setInputData({
                            ...inputData,
                            email : e.target.value
                            })
                            console.log(inputData)
                        }}/>

                    <label htmlFor="PhoneNumbers" className="PhoneNumbers">username</label>
                    <input id="PhoneNumbers" type="text" className="PhoneNumberInputs" onChange={(e)=>{
                        setInputData({
                            ...inputData,
                            username : e.target.value
                        })
                            console.log(inputData)
                    }}/>
                    <label htmlFor="Passwords" className="Passwords">Password</label>
                    <input  type="password" className="PasswordInputs" autoComplete="false" id="Passwords" onChange={(e)=>{
                        setInputData({
                            ...inputData,
                            password : e.target.value
                        })
                        console.log(inputData)
                    }} />

                    <label htmlFor="Passwords2" className="Passwords">Re-Type Password</label>
                    <input type="password" className="PasswordInputs" autoComplete="false" id="Passwords2" onChange={(e)=>{
                        setInputData({
                            ...inputData,
                            password2 : e.target.value
                        })
                        console.log(inputData)
                    }} />

                    <div className="sameContainer">
                        {same ? (
                            <a className="sameText">Password Harus Sama</a>
                        ) : null}
                        
                    </div>

                    <button type="submit" className="btnRegister" disabled={same}>Register</button>
                    <h3 className="accountTexts">Belum Punya Akun?</h3>
                    <Link to="/login" className="toLogin">Login Disini</Link>
            </form>
        </div>

        <section className="register">
            <div className="bgRegister1"></div>
            <div className="bgRegister2"></div>
        </section>
        </>

        )}
        </>
        
    )
}

export default Register