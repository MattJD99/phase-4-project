import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {UserContext} from "../context/user";
import {MessageContext} from "../context/message";

function Logout() {
  const {setUser} = useContext(UserContext);
  const {setMessage} = useContext(MessageContext);
  const history = useHistory()

  useEffect(() => {
    fetch("http://127.0.0.1:9393/logout", {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(data => {
      setUser(null)
      setMessage({message: data.message, status: "successful"})
      history.push("/login")
    })
    .catch(error => console.log(error))
  }, [setUser, setMessage, history]);

  return (
    <div>See you at your next workout!</div>
  )
}

export default Logout;