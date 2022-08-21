import React from 'react';
import ChatBar from '../chat-bar';
import { useSelector, useDispatch } from 'react-redux';
import { setConversations } from '../../redux/slices/persistedSlice';
import './styles.css';

export default function ChatBox({ selectedUser }) {
  const dispatch = useDispatch();
  const activeConversations = useSelector((state) => state?.persistedSlice?.activeConversations);
  const userDetails = useSelector((state) => state?.persistedSlice?.userDetails);
  const selectedUserConversation = activeConversations?.filter((conversation) => conversation.id === selectedUser.id);
  const onMessageSend = (message) => {
    const newConversations = { ...selectedUser, message, date: new Date().getTime(), reply: 'Reply....', userDetails }
    const conversations = [...activeConversations, newConversations];
    dispatch(setConversations(conversations));
  }

  return (
    <div className='chat-box'>
      <div className='chats'>
        {
          selectedUserConversation?.reverse()?.map((conversation) => (
            <React.Fragment key={conversation.date}>
              <div className='chat-row-me' >
                <div className='chat-msg-me'>{conversation.message}</div>
                <img height={40} width={40} className='chat-avatar' src={userDetails?.profileImage} alt='avatar' />
              </div>


              <div className='chat-row' >
                <img height={40} width={40} className='chat-avatar' src={conversation.profileImage} alt='avatar' />
                <div className='chat-msg'>{conversation.reply}</div>
              </div>
            </React.Fragment>
          ))
        }
      </div>


      <ChatBar
        onPress={(message) => {
          onMessageSend(message);
        }}

        customStyle={{
          position: 'absolute',
          bottom: 0,
          left: 2,
          width: "97%",
        }} />
    </div>
  )
}
