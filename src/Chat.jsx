import React, { useContext } from "react";
import "./Chat.css";
import { MyContext } from "./MyContext";

function Chat() {
  const { newChat, setNewChat, prevChats, setPrevChats } =
    useContext(MyContext);

  return (
    <>
      {newChat && <h1>Start New Chat</h1>}
      <div className="chat">
        {prevChats?.map((chat, idx) => (
          <div className={chat.role === "user" ? "userDiv" : "aiDiv"} key={idx}>
            {chat.role === "user" ? (
              <p className="userMsg">{chat.content}</p>
            ) : (
              <p className="assistantMsg">{chat.content}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Chat;
