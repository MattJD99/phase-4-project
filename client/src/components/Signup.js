import {useState, useContext} from "react"
import {useHistory} from "react-router-dom"
import {UserContext} from "../context/user"
import {MessageContext} from "../context/message"

function Signup() {
  const {signup} = useContext(UserContext);
  const {setMessage} = useContext(MessageContext);


  const [userObj, setUserObj] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    weight: "",
    workout: []
  });

  const history = useHistory()

  function handleChange(e) {
    // console.log(e.target.value)
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
    const didItWork = signup({...userObj, password_confirmation: userObj.passwordConfirmation})
        if (didItWork) {
            setMessage({message: "User successfully created!", color: "green"})
            history.push("/profile")
            debugger
    }
  }

    return (
        <div>
          <h1>Signup</h1>
          <h2>This is the Signup</h2>
                <h3>Signup</h3>
                  <form onSubmit={handleSubmit}>
                      <label value="username">Username: </label>          
                      <input placeholder="case sensitive" type="text" name="username" value={userObj.username} onChange={handleChange} />
                      <br></br>
                      <label value="password">Password: </label> 
                      <input placeholder="case sensitive" type="password" name="password" value={userObj.password} onChange={handleChange} />
                      <br></br>
                      <label value="email">email: </label> 
                      <input placeholder="email" type="text" name="email" value={userObj.email} onChange={handleChange} />
                      <br></br>
                      <label value="age">age: </label> 
                      <input placeholder="age" type="integer" name="age" value={userObj.age} onChange={handleChange} />
                      <br></br>
                      <label value="weight">weight: </label> 
                      <input placeholder="weight" type="integer" name="weight" value={userObj.weight} onChange={handleChange} />
                      <br></br>
                      <input type="submit" value="Create my Account"/>
                  </form>
                {/* <p>Current User: {userObj.username === "guest" ? "guest": userObj.username}</p> */}
        </div>
          )
}
  
  export default Signup;