import React,{useState,useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import {useLocation} from 'react-router-dom'

let socket

const Chat = () => {

  const ENDPOINT = "localhost:4000"

  const [name, setName] = useState("")
  const [room, setRoom] = useState("")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])


const location = useLocation()




  useEffect(() => {
    const {name,room} = queryString.parse(location.search)
   
    socket = io(ENDPOINT)
    console.log(socket)

    setName(name)
    setRoom(room)

    socket.emit('Join',{name,room},()=>{
     
    })

    return ()=>{
      socket.emit('disconnect');

      socket.off()
    }
  
  }, [ENDPOINT,location.search])
  
  useEffect(() => {
    socket.on('message',(message)=>{
      setMessages([...messages,message])
    })
  }, [messages])
  

  const sendMessage = (e)=>{
    console.log("12")
    e.preventDefault()
   

    if(message){
    socket.emit('sendMessage',message,()=>setMessage(''))
  }
}

console.log(message,messages)

  return (
    <div className='outerContainer'>
    <div className='container'>
    <input value={message} 
    onChange={e=>setMessage(e.target.value)}
    onKeyPress={e=>e.key ==="Enter" ? sendMessage(e):null}/>
    </div>
    </div>
  )
}

export default Chat