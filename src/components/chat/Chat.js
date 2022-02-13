import React,{useState,useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import {useLocation} from 'react-router-dom'

let socket

const Chat = () => {

  const ENDPOINT = "localhost:4000"

  const [name, setName] = useState("")
  const [room, setRoom] = useState("")


const location = useLocation()




  useEffect(() => {
    const {name,room} = queryString.parse(location.search)
   
    socket = io(ENDPOINT)
    console.log(socket)

    setName(name)
    setRoom(room)

    socket.emit('Join',{name,room})
  
  }, [ENDPOINT,location.search])
  



  return (
    <div>Chat</div>
  )
}

export default Chat