import { useContext, useEffect, useState } from "react";
import { MyContext } from "./MyContext";
import "./Sidebar.css";
import { v1 as uuidv1 } from "uuid";

function Sidebar() {
  const {
    allThread,
    setAllThread,
    currThreadId,
    setPrompt,
    setReply,
    setCurrThreadId,
    setNewChat,
    setPrevChats,
  } = useContext(MyContext);

  const getAllThreads = async () => {
    const response = await fetch("http://localhost:8080/api/thread");
    const res = await response.json();
    const filterData = res.map((thread) => ({
      threadId: thread.threadId,
      title: thread.title,
    }));
    setAllThread(filterData);
  };

  useEffect(() => {
    getAllThreads();
  }, [currThreadId]);

  const createNewChat = async () => {
    setNewChat(true);
    setPrompt("");
    setReply(null);
    setCurrThreadId(uuidv1());
    setPrevChats([]);
  };

  return (
    <section className="Sidebar">
      <div className="upperSection">
        <div className="logoClass">
          <div>
            <img
              className="logo"
              src="\src\assets\Isac3.jpeg"
              alt="issac_logo"
            />
          </div>
          <div>ISSAC-AI</div>
        </div>
        <button onClick={createNewChat}>
          <div>
            <p>New Chat</p>
          </div>
          <span>
            <i className="fa-solid fa-pen-to-square"></i>
          </span>
        </button>
      </div>

      <ul className="history">
        {allThread?.map((thread, idx) => (
          <li key={idx}>{thread.title}</li>
        ))}
      </ul>
      <div className="sign">By Satyam &hearts;</div>
    </section>
  );
}

export default Sidebar;
