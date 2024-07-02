import React, { useState } from "react";
import { FaCode } from "react-icons/fa6";
import Client from "../Components/Client";
import EditorArea from "../Components/EditorArea";
const Editor = () => {
  const [clients, setClients] = useState([
    { socketId: 1, name: "Anurag" },
    { socketId: 2, name: "Pilla" },
    { socketId: 3, name: "Hero" },
    { socketId: 4, name: "Chotu" },
    { socketId: 5, name: "Don" },
    
  ]);
  return (
    <div className="mainWrapper">
      <div className="sideBar">
        <div className="sideInner">
          <div className="logoAndText">
            <FaCode className="editorLogo logo" />
            <span className="editorLogo">Sync Script</span>
          </div>
          <h3>Connected</h3>
          <div className="clientList">
            {clients.map((clients) => (
              <Client key={clients.socketId} name={clients.name} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn">Copy Room Id</button>
        <button className="btn leaveBtn">Leave</button>
      </div>
      <div className="editorArea">
        <EditorArea />
      </div>
    </div>
  );
};

export default Editor;
