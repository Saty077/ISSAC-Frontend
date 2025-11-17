import React, { useContext } from "react";
import "./Chat.css";
import { MyContext } from "./MyContext";
import ReactMarkdown from "react-markdown";
import RehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

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
              <ReactMarkdown rehypePlugins={[RehypeHighlight]}>
                {chat.content}
              </ReactMarkdown>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Chat;
