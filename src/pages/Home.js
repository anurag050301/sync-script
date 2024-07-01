import React from 'react'
import { FaCode } from "react-icons/fa6";
const Home = () => {
  return (
    <div className='homePage'>
      <div className='form'>
        <div className='logoName'>
        <FaCode className='logo'/>
        <span className='logoText'>Sync Script</span>
        </div>
          <h4 className='mainLabel'>Enter Your roomID inviation</h4>
          <div className='inputGroup'>
            <input type='text' className='inputBox' placeholder='Room ID' />
            <input type='text' className='inputBox' placeholder='Enter Your Name' />
            <button type='submit' className='btn joinBtn'>Join</button>
            <span className='createRoomInfo'>
              If you don't have an invite then Create &nbsp;
              <a href='' className='createNewBtn'>Create New Room</a>
            </span>
          </div>
      </div>
      <footer>
            <h4>Creted with ❤️ by <a href='https://github.com/anurag050301'>Anurag Dubey</a></h4>
          </footer>
    </div>
  )
}

export default Home