import { useContext } from 'react';
import {UserContext} from "../context/user";
import {NavLink} from 'react-router-dom'

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "black",
    backgroundColor: "teal",
    fontWeight: "bold",
    verticalAlign: "center"
}

function Navbar() {
    const {user} = useContext(UserContext)
    return (
        <div>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/"
            >Home</NavLink>

            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/exercises"
            >Our Exercises</NavLink>

            {user ? <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/exercises/new"
            >Record Exercise</NavLink> : null}

            {user ? <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/logout"
            >Logout</NavLink> : null}
            
            {!user ? <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/login"
            >Login</NavLink> : null}

            {user ? <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/profile"
            >My Record</NavLink> : null}
        </div>
    )
}

export default Navbar;