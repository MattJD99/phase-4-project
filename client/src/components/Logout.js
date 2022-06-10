import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {UserContext} from "../context/user";
import {MessageContext} from "../context/message";

function Logout() {
  const {signout} = useContext(UserContext);
  const {setMessage} = useContext(MessageContext);
  const history = useHistory()

  useEffect(() => {
    const handleSignout = async () => {
        const didItWork = await signout()
        if (didItWork) {
            setMessage({message: "Successfully signed out", color: "green"})
            history.push("/login")
        }
    }
    handleSignout()
}, [signout, history, setMessage]);

  return (
    <div>See you at your next workout!</div>
  )
}

export default Logout;