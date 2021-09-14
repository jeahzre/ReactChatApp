import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';

const App = () => {
  const handleLogout = () => {
    localStorage.setItem("username", '');
    localStorage.setItem("password", '');
    window.location.reload();
  }
  
  if(!localStorage.getItem('username')) {return <LoginForm/>}
  return (
    <>
      <ChatEngine
      height="100vh"
      projectID="b2e28c78-8a6e-4c07-b7d9-8ee0a47b8e4f"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => { 
      console.log(chatAppProps)
      return <ChatFeed {...chatAppProps}/>
      }
      }
      />
      <button className="logout-button" onClick={handleLogout}>Log out</button>
      </>
    )
};

export default App;