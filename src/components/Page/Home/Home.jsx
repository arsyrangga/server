import MessageContainer from '../../MessageContainer/MessageContainer'
import Navbar from '../../Navbar/Navbar'
import './Home.css'
import { useEffect } from 'react'


const Home = () => {

        useEffect(()=>{
        window.scrollTo(0,document.body.scrollHeight);
        if(isLogin){
            window.location.href ='/home#test'
        }
    }, [])

    const isLogin = sessionStorage.getItem('isLogin')    

    return(
    <>
        {isLogin ? (
        <>
        <section className="home" id="home">
            <Navbar />
            <MessageContainer />
        </section>
        </>
    ) : window.location.href = '/login' }
        
    </>
    )
}

export default Home