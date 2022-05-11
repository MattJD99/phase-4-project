import {UserContext} from "../context/user";
import { useContext } from "react"



function Signup() {
  const {user} = useContext(UserContext);

  function handleChange(event) {
    event.preventDefault()
    console.log("handleChange")
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log("handleSubmit")
  }
    return (
        <div>
          <h1>Signup</h1>
          <h2>This is the Signup</h2>
                <h3>Login</h3>
                  <form onSubmit={handleSubmit}>
                      <label htmlFor="login" value="username">Username: </label>          
                      <input placeholder="case sensitive" type="text" name="login" value={user.name} onChange={handleChange} />
                      <input placeholder="case sensitive" type="password" name="password" value={user.password} onChange={handleChange} />
                      <input type="submit" value="Login"/>
                  </form>
                {/* <p>Current User: {user.name === "guest" ? "guest": user.name}</p> */}
        </div>
          )
}
  
  export default Signup;