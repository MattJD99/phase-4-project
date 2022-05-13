import {useState, useContext} from "react"
import {useHistory} from "react-router-dom"
import {UserContext} from "../context/user"
import {MessageContext} from "../context/message"

function Signup() {
  const {setUser, login} = useContext(UserContext);
  const {setMessage} = useContext(MessageContext);


  const [userObj, setUserObj] = useState({
    email: "",
    password: ""
  });

  const history = useHistory()

  function handleChange(e) {
    setUserObj({
      ...userObj,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if ([userObj.email, userObj.password].some(val => val.trim() === "")) {
      setMessage({ message: "You must fill in all the information please!", color: "red" });
    }
    login(userObj);
  }

    return (
        <div>
          <h1>Signup</h1>
          <h2>This is the Signup</h2>
                <h3>Signup</h3>
                  <form onSubmit={handleSubmit}>
                      <label htmlFor="login" value="username">Username: </label>          
                      {/* <input placeholder="case sensitive" type="text" name="login" value={username} onChange={handleChange} />
                      <input placeholder="case sensitive" type="password" name="password" value={password} onChange={handleChange} /> */}
                      <input type="submit" value="Login"/>
                  </form>
                {/* <p>Current User: {user.name === "guest" ? "guest": user.name}</p> */}
        </div>
          )
}
  
  export default Signup;