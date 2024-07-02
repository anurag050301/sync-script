import React, { useEffect, useRef, useState } from "react";
import { FaCode } from "react-icons/fa6";
import Client from "../Components/Client";
import EditorArea from "../Components/EditorArea";
import { initSocket } from "../socket";
import ACTIONS from "../Actions";
import {
  useLocation,
  useNavigate,
  Navigate,
  useParams,
} from "react-router-dom";
import toast from "react-hot-toast";
import { cleanup } from "@testing-library/react";
const Editor = () => {
  const socketRef = useRef(null);
  const location = useLocation();
  const { roomId } = useParams();
  const reactNavigator = useNavigate();
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));
      function handleErrors(e) {
        console.log("socket error", e);
        toast.error("Socket connection failed, try again later.");
        reactNavigator("/");
      }
      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        userName: location.state?.userName,
      });
      //Listening for joined event.
      socketRef.current.on(
        ACTIONS.JOINED,
        ({ clients, userName, socketId }) => {
          if (userName !== location.state.userName) {
            toast.success(`${userName} has joind the room.`);
          }
          setClients(clients);
        }
      );
      //listening for disconnected.
      socketRef.current.on(ACTIONS.DISCONNECTED, ({socketId, userName}) => {
        toast.success(`${userName} is disconnected from this room.`);
        setClients((prev) => {
          return prev.filter((client) =>client.socketId !== socketId);
        });
      });
    };
    init();
    return () => {
      socketRef.current.disconnect();
      socketRef.current.off(ACTIONS.JOINED);
      socketRef.current.off(ACTIONS.DISCONNECTED);
    }
  }, []);

  if (!location.state) {
    return <Navigate to="/" />;
  }

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
              <Client key={clients.socketId} name={clients.userName} />
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
