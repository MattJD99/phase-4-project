import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {UserContext} from "../context/user";
import {MessageContext} from "../context/message";

function Login() {
  const history = useHistory()
  const {login} = useContext(UserContext);
  const {setMessage} = useContext(MessageContext);
  
  const [userObj, setuserObj] = useState({username: "", password: ""})
  
  function handleChange(e) {
    setuserObj({
      ...userObj,
      [e.target.name]: e.target.value
    });
  }
  
    function handleSubmit(event) {
    event.preventDefault();
    if ([userObj.username, userObj.password].some(val => val.trim() === "")) {
      setMessage({message: "You must fill in all the information please!", color: "red"})
      // alert("You must fill in all the information please.")
    }
    login(userObj)
    setMessage({message: "Login successful.", color: "green"})
    // debugger
    history.push("/profile")
    // debugger
  }

  // fetch("/login", {
  //       method: "POST",
  //           headers: {
  //               "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify(userObj)
  //           })
  //           .then(response => {
  //             if (response.status === 200) {
  //               response.json()
  //               .then((data) => {
  //                 setUser(data)
  //                 console.log(user)
  //                 setMessage({message: data.message, status: "success"})
  //                 history.push("/profile")
  //           })
  //     }   else {
  //           response.json()
  //           .then(error => {
  //               setuserObj({
  //                   name:"",
  //                   password: ""
  //               })
  //               setMessage({message: error.message, status: "Invalid credentials."})
  //           })
  //           .catch(error => setMessage({message: error, status: "Invalid credentials."}))
  //         }
  //       })
  //     }
  

          return (
              <div>
                <h3>Login</h3>
                  <form onSubmit={handleSubmit}>
                      <label htmlFor="name">Name: </label>          
                      <input onChange={handleChange} type="text" name="username" value={userObj.username}  />
                      <label htmlFor="password">Password: </label>  
                      <input onChange={handleChange} type="password" name="password" value={userObj.password} />
                      <input type="submit" value="Login"/>
                  </form>
                  <p>Current User: {userObj.username === null ? "guest" : userObj.username}</p>
              </div>
          )
}

export default Login;