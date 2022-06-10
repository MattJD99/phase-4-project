import React, {useState, useContext, useCallback} from "react"
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
            if (resp.status === !null) {
                const data = await resp.json()
                    setUser({...data.data.attributes, workouts: data.data.relationships.workouts.data})
                    setMessage({message: "Welcome back", color: "green"})
             } else {
                setMessage({message:"Welcome to FiTrakr", color: "red"})
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
                setUser({...data.data.attributes, workouts: data.data.relationships.workouts.data})
                // setWorkout({...data.data.relationships.workouts.data})
                setMessage({message: "Welcome back", color: "green"})
                console.log(data.data.attributes)
                console.log(user)
                console.log("workouts:", data.data.relationships.workouts.data)
                return true
            } else {
                setMessage({message: "Invalid credentials, please try again", color: "red"})
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
            if (resp.status === 201) {
                const data = await resp.json()
                setUser({...data.data.attributes, workout: data.data.relationships.workouts.data})
                // setWorkout({...data.data.relationships.workouts.data})
            } else {
                const errorObj = await resp.json()
                setMessage({message: errorObj.error, color: "red"})
            }

        } catch(e) {
            setMessage({message: e.message, color: "red"})
        }
    }
    const signout = async () => { 
        try {
            await fetch("/logout", {
                method: "DELETE",
                
            })
            setMessage({messge: "You have been logged out", color: "green"})
            setUser(null)
            return true
        } catch(e) {
            setMessage({message: e.message, color: "red"})
            return false
        }
    }

    const destroyed = async (deleteUser) => { 
        try {
            await fetch("/users", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(deleteUser)
            })
            setMessage({message: "Your profile has successfully been removed and destroyed."})
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