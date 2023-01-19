import React from 'react';
import "./Header.css";

export default function Header() {

    const restartGame = () => {
        console.log("restart");
    }

  return (
    <div className='header-box'>
        <h2 className='restart' onClick={restartGame}>Press 'R' To Restart</h2>
    </div>
  )
}
