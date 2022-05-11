import { MessageContext } from "../context/message";
import { useContext, useEffect } from "react";

function Notification() {
    const {message, setMessage} = useContext(MessageContext);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setMessage(null)
        }, 3000);
        return () => {
            clearTimeout(timerId)
        };
    }, [message, setMessage]);
    return (
        <div id="notification-banner">
            <p id="notification-message" className={message?.status}>{message?.message}</p>
        </div>
    )
}

export default Notification;