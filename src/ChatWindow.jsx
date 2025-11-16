import "./ChatWindow.css";
import Chat from "./Chat.jsx";

function ChatWindow() {
  return (
    <div className="chatwindow">
      <div className="navbar">
        <span>
          ISSAC-AI <i class="fa-solid fa-angle-down"></i>
        </span>
        <div className="userIconDiv">
          <span className="userIcon">
            <i class="fa-solid fa-user"></i>
          </span>
        </div>
      </div>
      <Chat></Chat>
      <div className="chatInput">
        <div className="inputBox">
          <input type="text" placeholder="Ask anything" />
          <div className="submit">
            <i class="fas fa-paper-plane"></i>
          </div>
        </div>
        <p className="info">ISSAC-AI can make mistakes</p>
      </div>
    </div>
  );
}

export default ChatWindow;
