import React, {useState, useContext, useCallback} from "react"
// import {useHistory} from "react-router-dom"
import {MessageContext} from "../context/message"

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const {setMessage} = useContext(MessageContext)

    // memoizing specifically involves caching the return values of a function
    const getCurrentUser = useCallback(async () => { 
        try {
            const resp = await fetch("/me")
            //  if (resp.status === 200) {
            if (resp === !null) {
                const data = await resp.json()
                console.log(data)
                debugger
                // if (data == !null) {
                    setUser({...data.data.attributes, workout: data.data.relationships.workout.data})
                    setMessage({message: "Welcome back", color: "green"})
                // }
                // setUser({data})
                debugger
             } else {
                 debugger
                const errorObj = await resp.json()
                setMessage({message:"you are currently a guest.", color: "red"})
                debugger
             }
        } catch (e) {
            setMessage({message: e.message, color: "red"})
        }
    }, [setMessage])

    const login = async (signInData) => {
        try {
            const resp = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(signInData)
            })
            if (resp.status === 202) {
                const data = await resp.json()
                console.log("data = ", data)
                console.log("data.data.attributes = ", data.data.attributes)
                console.log("workout = ", data.data.relationships.workout.data)
                debugger
                setUser({...data.data.attributes, workout: data.data.relationships.workout.data})
                setMessage({message: "Welcome back", color: "green"})
                debugger
                return true
            } else {
                const errorObj = await resp.json()
                setMessage({message: errorObj.error, color: "red"})
                debugger
                return false
            }

        } catch(e) {
            setMessage({message: e.message, color: "red"})
        }
    }

    const signup = async (userInfo) => {
        try {
            const resp = await fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(userInfo)
            })
            // debugger
            if (resp.status === 201) {
                const data = await resp.json()
                setUser({...data.data.attributes, workouts: data.data.relationships.workouts.data})
                debugger
            } else {
                const errorObj = await resp.json()
                setMessage({message: errorObj.error, color: "red"})
            }
            debugger

        } catch(e) {
            setMessage({message: e.message, color: "red"})
        }
    }
    const signout = async () => { 
        try {
            const resp = await fetch("/logout", {
                method: "DELETE",
                
            })
            // debugger         
            setMessage({messge: "You have been logged out", color: "green"})
            // debugger
            setUser(null)
            return true
        } catch(e) {
            setMessage({message: e.message, color: "red"})
            return false
        }
    }

    const destroyed = async (deleteUser) => { 
        try {
            const resp = await fetch("/users", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(deleteUser)
            })
            // debugger         
            setMessage({message: "Your profile has successfully been removed and destroyed."})
            // debugger
            setUser(null)
            debugger
            return true
        } catch(e) {
            setMessage({message: e.message, color: "red"})
            return false
        }
    }

    return (
        <UserContext.Provider value={{user, setUser, getCurrentUser, login, signup, signout, destroyed}}>
            {children}
        </UserContext.Provider>
    )

}

export {UserContext, UserProvider};