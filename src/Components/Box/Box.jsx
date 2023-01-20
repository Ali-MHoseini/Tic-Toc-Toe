import "./Box.css";
import React from 'react'

export default function Box({isDark}) {

    const addToBox = () => {
        console.log("add");
    }
    

  return (
    <div className="container-box" style={{backgroundColor:isDark===true?'#0EF0FF':'#FFE79E'}}>
        <div className="box box1" style={{backgroundColor:isDark===true?'#072942':'white'}} onClick={addToBox}></div>
        <div className="box box2" style={{backgroundColor:isDark===true?'#072942':'white'}} onClick={addToBox}></div>
        <div className="box box3" style={{backgroundColor:isDark===true?'#072942':'white'}} onClick={addToBox}></div>
        <div className="box box4" style={{backgroundColor:isDark===true?'#072942':'white'}} onClick={addToBox}></div>
        <div className="box box5" style={{backgroundColor:isDark===true?'#072942':'white'}} onClick={addToBox}></div>
        <div className="box box6" style={{backgroundColor:isDark===true?'#072942':'white'}} onClick={addToBox}></div>
        <div className="box box7" style={{backgroundColor:isDark===true?'#072942':'white'}} onClick={addToBox}></div>
        <div className="box box8" style={{backgroundColor:isDark===true?'#072942':'white'}} onClick={addToBox}></div>
        <div className="box box9" style={{backgroundColor:isDark===true?'#072942':'white'}} onClick={addToBox}></div>
    </div>
  )
}
