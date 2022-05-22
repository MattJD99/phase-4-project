import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {UserContext} from "../context/user";
import {MessageContext} from "../context/message";

function Logout() {
  const {signout} = useContext(UserContext);
  const {setMessage} = useContext(MessageContext);
  const history = useHistory()

  // useEffect(() => {
  //   fetch("http://localhost:3000/logout", {
  //     method: "DELETE"
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     setUser(null)
  //     setMessage({message: data.message, status: "successful"})
  //     history.push("/login")
  //   })
  //   .catch(error => console.log(error))
  // }, [setUser, setMessage, history]);

  useEffect(() => {
    const handleSignout = async () => {
        const didItWork = await signout()
        if (didItWork) {
            setMessage({message: "Successfully signed out", color: "green"})
            history.push("/login")
        }
    }
    handleSignout()
    // binding.pry
}, [signout, history, setMessage]);

  return (
    <div>See you at your next workout!</div>
  )
}

export default Logout;