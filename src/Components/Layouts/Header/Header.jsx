import React from 'react';
import "./Header.css";

export default function Header({ChangeTheme,isDark}) {

    const restartGame = () => {
        console.log("restart");
    }

  return (
    <div className='header-box' style={{backgroundColor:isDark===true?'#0EF0FF':'#FFE79E'}}>
        <h2 className='restart' onClick={restartGame}>Press 'R' To Restart</h2>
        <div className='DarkAndLightBtn'
             style={{backgroundColor:isDark === true?'white':'black',outline:isDark===true?'2px solid white':'2px solid black'}}
             onClick={ChangeTheme} ></div>
    </div>
  )
}
