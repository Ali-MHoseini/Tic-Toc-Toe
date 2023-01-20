import "./App.css";
import { useState, useRef } from "react";
import Modal from "./Components/Modal/Modal";
import Header from "./Components/Layouts/Header/Header";
import Footer from "./Components/Layouts/Footer/Footer";
import Box from "./Components/Box/Box";

function App() {
  const inpElement = useRef("");
  const [playerOneName, setPlayerOneName] = useState({playerName:"" , playerNut:"",playerTurn:1});
  const [playerSecondName, setPlayerSecondName] = useState({playerName:"" , playerNut:"",playerTurn:2});
  const [modalState, setModalState] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);
  const [stopTimer, setStopTimer] = useState(false);
  const settingModal = () => {
    if (inpElement.current.innerHTML === "") {
      alert("Please Set a Name");
    } else {
      setModalState(modalState + 1);
    }
  };
  const ChangeNamePlayerOne = (value) => {
    setPlayerOneName({...playerOneName,playerName:value});
  };

  const ChangeNamePlayerSecond = (value) => {
    setPlayerSecondName({...playerSecondName,playerName:value});
  };

  const selectedNut = (value) => {
    setPlayerOneName({...playerOneName,playerNut:value.alt});
    setPlayerSecondName({...playerSecondName,playerNut:value.alt==="O"?"X":"O"});
  }

  return (
    <div className="App">
      {modalState === 0 ? (
        <Modal>
          <h2>Welcome</h2>
          <h3>Enter First Player Name</h3>
          <input
            type="text"
            value={playerOneName.playerName}
            className="inputs"
            placeholder="Enter Name..."
            onChange={(e) => ChangeNamePlayerOne(e.target.value)}
          />
          <div className="select">
            <button className="button-selector" onClick={(e) => selectedNut(e.target)}><img className="img-selector" src="assets/images/O.png" alt="O"/></button>
            <button className="button-selector" onClick={(e) => selectedNut(e.target)}><img className="img-selector" src="assets/images/X.png" alt="X"/></button>
          </div>
          <button className="buttons" onClick={settingModal}>
            Submit
          </button>
        </Modal>
      ) : modalState === 1 ? (
        <Modal>
          <h2>Welcome</h2>
          <h3>Enter Second Player Name</h3>
          <input
            type="text"
            className="inputs"
            value={playerSecondName.playerName}
            placeholder="Enter Name..."
            onChange={(e) => ChangeNamePlayerSecond(e.target.value)}
          />
          <button className="buttons" onClick={settingModal}>
            Submit
          </button>
        </Modal>
      ) : (
        <div className="main-box-container">
          <Header
            ChangeTheme={() => setDarkTheme(!darkTheme)}
            isDark={darkTheme}
          />
          <Box isDark={darkTheme} />
          <Footer isDark={darkTheme} stop={stopTimer} />
        </div>
      )}
    </div>
  );
}

export default App;
