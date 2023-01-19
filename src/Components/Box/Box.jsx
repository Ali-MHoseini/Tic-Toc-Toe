import "./Box.css";
import React from 'react'

export default function Box() {

    const addToBox = () => {
        console.log("add");
    }
    

  return (
    <div className="container-box">
        <div className="box box1" onClick={addToBox}></div>
        <div className="box box2" onClick={addToBox}></div>
        <div className="box box3" onClick={addToBox}></div>
        <div className="box box4" onClick={addToBox}></div>
        <div className="box box5" onClick={addToBox}></div>
        <div className="box box6" onClick={addToBox}></div>
        <div className="box box7" onClick={addToBox}></div>
        <div className="box box8" onClick={addToBox}></div>
        <div className="box box9" onClick={addToBox}></div>
    </div>
  )
}
