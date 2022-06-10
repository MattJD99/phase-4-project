import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {UserContext} from "../context/user";
import {MessageContext} from "../context/message";

function Login() {
  const history = useHistory()
  const {setUser, login} = useContext(UserContext);
  const {setMessage} = useContext(MessageContext);
  
  const [userObj, setuserObj] = useState({email: "", password: ""})
  
  function handleChange(e) {
    setuserObj({...userObj,
      [e.target.name]: e.target.value
    });
  }
  
    function handleSubmit(event) {
    event.preventDefault();
    if ([userObj.email, userObj.password].some(value => value.trim() === "")) {
      setMessage({message: "You must fill in all the information please!", color: "red"})
    }
    login(userObj)
    // setMessage({message: "Login successful.", color: "green"})
  }
  
    return (
        <div>
          <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Email:</label>          
                <input onChange={handleChange} type="text" name="email" value={userObj.email} required/>
                <label htmlFor="password">Password: </label>  
                <input onChange={handleChange} type="password" name="password" value={userObj.password} />
                <input type="submit" value="Login"/>
            </form>
            <p>Current User: {userObj.username === null ? "guest" : userObj.username}</p>
        </div>
    )
}

export default Login;