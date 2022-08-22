import React from 'react';
import ChatBar from '../chat-bar';
import { useSelector, useDispatch } from 'react-redux';
import { setConversations } from '../../redux/slices/persistedSlice';
import './styles.css';

export default function ChatBox({ selectedUser, onUserSelect = () => { } }) {
  const dispatch = useDispatch();
  const activeConversations = useSelector((state) => state?.persistedSlice?.activeConversations);
  const userDetails = useSelector((state) => state?.persistedSlice?.userDetails);
  const selectedUserConversation = activeConversations?.filter((conversation) => conversation.id === selectedUser.id);

  const onMessageSend = (message) => {
    const fakeReply = {
      'hi': 'Hello',
      'hello': 'Hello',
      'hey': 'Hello',
      'how are you': 'I am ' + selectedUser?.name,
      'name': 'My name is '+ selectedUser?.name,
      'fine': 'I am fine',
      'fine thanks': 'I am fine',
      'fine thank you': 'I am fine',
      'fine thank you very much': 'I am fine',
      'what is your name': 'My name is ' + selectedUser?.name,
      'what your name?': 'My name is ' + selectedUser?.name,
      'age': 'I am ' + selectedUser?.age + ' years old',
      'what is your age': 'I am ' + selectedUser?.age + ' years old',
      'what is your designation': 'I am ' + selectedUser?.designation,
    }[message?.toLowerCase()];
    const newConversations = { ...selectedUser, message, date: new Date().getTime(), reply: fakeReply || 'Not sure', userDetails }
    const conversations = [...activeConversations, newConversations];
    dispatch(setConversations(conversations));
  }

  return (
    <div className='chat-box'>
      <div className='chats'>
        {
          selectedUserConversation?.reverse()?.map((conversation) => (
            <React.Fragment key={conversation.date}>
              <div className='chat-row' >
                <img onClick={() => {
                  onUserSelect(selectedUser)
                }}
                  height={40} width={40} className='chat-avatar' src={conversation.profileImage} alt='avatar' />
                <div className='chat-msg'>{conversation.reply}</div>
              </div>

              <div className='chat-row-me' >
                <div className='chat-msg-me'>{conversation.message}</div>
                <img height={40} width={40} className='chat-avatar' src={userDetails?.profileImage} alt='avatar' />
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
