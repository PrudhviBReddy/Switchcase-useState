import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  let [score, setScore] = useState(0);
  let [balls, setBalls] = useState(0);
  let [wickets, setWickets] = useState(0);
  console.log("creating UI");


  return (
    <div className='App'>
        <h1>HOMEPAGE</h1>
        <h1>Score:{score}</h1>
        <h1>Overs:{parseInt(balls/6)}.{balls%6}</h1>
        <h1>Wickets: {wickets}</h1>
        <button onClick={()=>{
          setScore(score + 1);
          setBalls(balls + 1)
        }}>Single</button>
         <button onClick={()=>{
          setScore(score + 2);
          setBalls(balls + 1)
        }}>Double</button>
         <button onClick={()=>{
          setScore(score + 4);
          setBalls(balls + 1)
        }}>Four</button>
         <button onClick={()=>{
          setScore(score + 6);
          setBalls(balls + 1)
        }}>Six</button>
         <button onClick={()=>{
          setScore(score + 1);
        }}>Wide</button>
        <button onClick={()=>{
          setWickets(wickets + 1);
        }}> Wicket</button>
        <button onClick={()=>{
          setScore(score + 1);
        }}>NoBall</button>
        <br></br>
        <br></br>
        <Link to="/">Login</Link> 
    </div>
  )
}

export default Homepage