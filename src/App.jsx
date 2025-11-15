import "./App.css";
import { MyContext } from "./MyContext.jsx";
import ChatWindow from "./ChatWindow.jsx";
import Sidebar from "./Sidebar.jsx";

function App() {
  const ProviderValues = {};
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
