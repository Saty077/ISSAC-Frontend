import "./Sidebar.css";

function Sidebar() {
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
        <li>Thread1</li>
        <li>Thread2</li>
        <li>Thread3</li>
      </ul>
      <div className="sign">By Satyam &hearts;</div>
    </section>
  );
}

export default Sidebar;
