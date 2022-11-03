import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([{message:"I love u"},{message:"Whatz up"}]);

    const values = {
        messages,
        setMessages
    }

    return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
}

export const useChat=()=> useContext(ChatContext)