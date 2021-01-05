import { useEffect, useState } from 'react'
import ChatCard from '../ChatCard/ChatCard'
import './MessageContainer.css'
import '../Footer/Footer.css'


const MessageContainer = () => {

    

    const [note,setNote] = useState()

    const [addChat, setAddChat] = useState({
        users : sessionStorage.getItem('user'),
        body : ""
    })

    useEffect(()=>{
        fetch("http://localhost:5000/chats",{
            method : "GET",
            mode : "cors",
            headers : {
                "Content-Type" : "application/json"
            },
        })
        .then(res => res.json())
        .then(data => {
            setNote(data)
        })
    }, [])

    const handleDataStore = () =>{
        fetch("http://localhost:5000/chats",{
            method : "POST",
            mode : "cors",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(addChat)
        })
    }

    return(
        <>
            <section className="messageContainer">
                
                {note && (
                    <>
                    {note.map((e)=>(<>
                        <ChatCard key={e.id} headers={e.users} body={e.body} />
                        </>
                    ))}
                    </>
                )}
                <div className="test" id="test"></div>
            </section>

            <form className="footer" onSubmit={handleDataStore}>
            <input type="text" id="txtMsg" className="textMessage" onChange={(e)=>{
                setAddChat({
                    ...addChat,
                    body : e.target.value
                })
                console.log(addChat)
            }} />
            <button type="submit" className="btnSubmit"><i className="fas fa-arrow-right sendButton"></i></button>
            </form>
    </>
    )
}

export default MessageContainer