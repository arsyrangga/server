import { useState } from 'react'
import './Navbar.css'



const Navbar = () => {

    const [modal, setModal] = useState(false)
    const handleLogout = () => {
        sessionStorage.removeItem('isLogin')
        window.location.href = '/login'
    }
    return(
    <>
        {modal ? (
           <div className="modalMenu" onClick={handleLogout}>
               <h3>Logout</h3>
           </div> 
        ) : null}
        <nav className="navbar">
            <i className="fas fa-users navLogo"></i>
            <h3>Jvalley Group</h3>
            <div className="menu-right">
            <i className="fas fa-ellipsis-v menuLogo" onClick={()=>{
                setModal(!modal)
            }}></i>
            </div>
        </nav>

    </>
    )
}


export default Navbar