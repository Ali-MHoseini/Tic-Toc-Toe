import "./Box.css";
import React from 'react'
import { useContext } from "react";
import { BoardContext } from "../../App";

export default function Box({isDark, winFunc}) {

  const game = useContext(BoardContext)

    const addToBox = (event) => {
      const gameTurn = game.turn;
      const moveCount = game.moveCount
      const playerChar = gameTurn === 1 ? game.playerOneName.playerNut : game.playerSecondName.playerNut
      const playerName = gameTurn === 1 ? game.playerOneName.playerName : game.playerSecondName.playerName
      const imgAddr = `./assets/images/${playerChar}.png`
      const selectedID = event.target.id.split("")
      if(!game.gameboard[selectedID[0]][selectedID[1]]){
        game.gameboard[selectedID[0]][selectedID[1]]=playerChar
        event.target.innerHTML = `<img src=${imgAddr} alt=""/>`
        const nextTurn = gameTurn === 1 ? 2:1
        game.setTurn(nextTurn)
        game.setMoveCount(moveCount + 1)
        winFunc(playerChar, +selectedID[0], +selectedID[1], playerName)
      }
    }
    

  return (
    <div className="container-box" style={{backgroundColor:isDark===true?'#0EF0FF':'#FFE79E'}}>
        <div className="box box1" id="00" style={{backgroundColor:isDark===true?'#072942':'white'}} onClick={(e)=>addToBox(e)}></div>
        <div className="box box2" id="01" style={{backgroundColor:isDark===true?'#072942':'white'}} onClick={(e)=>addToBox(e)}></div>
        <div className="box box3" id="02" style={{backgroundColor:isDark===true?'#072942':'white'}} onClick={(e)=>addToBox(e)}></div>
        <div className="box box4" id="10" style={{backgroundColor:isDark===true?'#072942':'white'}} onClick={(e)=>addToBox(e)}></div>
        <div className="box box5" id="11" style={{backgroundColor:isDark===true?'#072942':'white'}} onClick={(e)=>addToBox(e)}></div>
        <div className="box box6" id="12" style={{backgroundColor:isDark===true?'#072942':'white'}} onClick={(e)=>addToBox(e)}></div>
        <div className="box box7" id="20" style={{backgroundColor:isDark===true?'#072942':'white'}} onClick={(e)=>addToBox(e)}></div>
        <div className="box box8" id="21" style={{backgroundColor:isDark===true?'#072942':'white'}} onClick={(e)=>addToBox(e)}></div>
        <div className="box box9" id="22" style={{backgroundColor:isDark===true?'#072942':'white'}} onClick={(e)=>addToBox(e)}></div>
    </div>
  )
}
