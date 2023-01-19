import './App.css';
import {useState,useRef} from "react";
import Modal from './Components/Modal/Modal'
import Header from './Components/Layouts/Header/Header'
import Footer from "./Components/Layouts/Footer/Footer";
import Box from './Components/Box/Box'

function App() {
  const inpElement = useRef('');
  const [playerOneName,setPlayerOneName] = useState('');
  const [playerSecondName,setPlayerSecondName] = useState('');
  const [modalState,setModalState] = useState(0)

  const settingModal = ()=> {
    if(inpElement.current.innerHTML === '') {
      alert('Please Set a Name')
    }else {
      setModalState(modalState +1)
    }
  }
  const ChangeNamePlayerOne = (value) => {
    setPlayerOneName(value)
  }

  const ChangeNamePlayerSecond = (value) => {
    setPlayerSecondName(value)
  }

  return(
      <div className="App">
        {
         modalState===0?<Modal>
          <h2>Welcome</h2>
          <h3>Enter First Player Name</h3>
          <input type="text"  value={playerOneName} className='inputs' placeholder='Enter Name...' onChange={(e)=>ChangeNamePlayerOne(e.target.value)} />
          <button className='buttons'  onClick={settingModal} >Submit</button>
          </Modal>:(modalState=== 1?<Modal>
           <h2>Welcome</h2>
           <h3>Enter Second Player Name</h3>
           <input type="text"  className='inputs' value={playerSecondName} placeholder='Enter Name...' onChange={(e)=>ChangeNamePlayerSecond(e.target.value)} />
           <button className='buttons' onClick={settingModal} >Submit</button>
         </Modal>:<div>
           <Header />
           <Box />
           <Footer />
         </div>)
        }
      </div>
  );
}

export default App;
