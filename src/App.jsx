import "./App.css";
import { MyContext } from "./MyContext.jsx";
import ChatWindow from "./ChatWindow.jsx";
import Sidebar from "./Sidebar.jsx";
import { useState } from "react";
import { v1 as uuidv1 } from "uuid";

function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState(null);
  const [currThreadId, setCurrThreadId] = useState(uuidv1());
  const [newChat, setNewChat] = useState(true);
  const [prevChats, setPrevChats] = useState([]);
  const [allThread, setAllThread] = useState([]);

  const ProviderValues = {
    prompt,
    setPrompt,
    reply,
    setReply,
    currThreadId,
    setCurrThreadId,
    newChat,
    setNewChat,
    prevChats,
    setPrevChats,
    allThread,
    setAllThread,
  };
  return (
    <div className="app">
      <MyContext.Provider value={ProviderValues}>
        <Sidebar></Sidebar>
        <ChatWindow></ChatWindow>
      </MyContext.Provider>
    </div>
  );
}

export default App;
