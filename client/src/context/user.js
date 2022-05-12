import React, {useState, useContext, useEffect, useCallback} from "react"
import {useHistory} from "react-router-dom"
import {MessageContext} from "../context/message"

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const {setMessage} = useContext(MessageContext)

    const getCurrentUser = useCallback(async () => { 
        debugger
        try {
            const resp = await fetch("/me")
             if (resp.status === 200) {
                const data = await resp.json()
                setUser({...data.data.attributes, posts: data.data.relationships.posts.data})
             } else {
                const errorObj = await resp.json()
                setMessage({message: errorObj.error, color: "red"})
             }
        } catch (e) {
            setMessage({message: e.message, color: "red"})
        }
    }, [setMessage])


    return (
        <UserContext.Provider value={{ user, setUser, getCurrentUser }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };