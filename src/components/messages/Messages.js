import React from 'react'
import './messages.css'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from '../message/Message'

const Messages = ({messages,name}) => {
  return (
   <ScrollToBottom className="messages">
   {messages.map((messages,i)=><div key={i}><Message messages={messages} name={name}/></div>)}
   </ScrollToBottom>
  )
}

export default Messages