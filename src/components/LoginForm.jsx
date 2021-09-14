import {useState} from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // username | password => chatengine => give messages, works out => logged in, error => try with new username. 
    
    const authObject = {
      "Project-ID": "b2e28c78-8a6e-4c07-b7d9-8ee0a47b8e4f", 
      "User-Name" : username, 
      "User-Secret" : password
    }
    
    try {
      await axios.get('https://api.chatengine.io/chats', {headers: authObject});
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      window.location.reload(); //reload to save to localStorage
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  }
  
  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
      <h1 className="title">Chat Application</h1>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/> 
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/> 
      <div align="center">
      <button type="submit" className="button">
      <span>Start Chatting</span>
      </button>
      </div>
      <h2 className="error">{error}</h2>
      </form>
    </div>
    )
}

export default LoginForm