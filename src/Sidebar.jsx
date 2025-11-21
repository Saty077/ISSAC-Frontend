import { useContext, useEffect, useState } from "react";
import { MyContext } from "./MyContext";
import "./Sidebar.css";

function Sidebar() {
  const { allThread, setAllThread, currThreadId } = useContext(MyContext);

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
  }, []);

  return (
    <section className="Sidebar">
      <button>
        <img className="logo" src="\src\assets\Isac3.jpeg" alt="issac_logo" />
        <div>ISSAC-AI</div>
        <span>
          <i className="fa-solid fa-pen-to-square"></i>
        </span>
      </button>
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
