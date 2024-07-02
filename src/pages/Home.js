import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaCode } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [name,setName] = useState('');
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success('Created New Room');
  };
  const joinRoom = () => {
    if(!roomId){
      toast.error('RoomId is required');
    }
    if(!name){
      toast.error('Your name is required');
    }
    //redirect
    navigate(`/editor/${roomId}`, {
      state: {
        name, 
      }
    })
  }
  const handleInputEnter = (e) => {
    if(e.code === 'Enter'){
        joinRoom();
      }
  }
  return (
    <div className="homePage">
      <div className="form">
        <div className="logoName">
          <FaCode className="logo" />
          <span className="logoText">Sync Script</span>
        </div>
        <h4 className="mainLabel">Enter Your roomID inviation</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="Room ID"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            onKeyUp={handleInputEnter}
          />
          <button type="submit" className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createRoomInfo">
            If you don't have an invite then Create &nbsp;
            <a onClick={createNewRoom} href="" className="createNewBtn">
              Create New Room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Creted with ❤️ by{" "}
          <a href="https://github.com/anurag050301">Anurag Dubey</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
