import './ChatCard.css'



const ChatCard = ({id,headers,body}) => {
    return(
        <div className="chatContainer" id={id}>
            <input type="text" autoComplete="off" value={headers} className="chatHeader" disabled/>
            <p className="chatBody">{body}</p>
        </div>

    )
}

export default ChatCard