import React from 'react'
import { useState } from 'react'
import "../style.css"

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div class="container">
    <div>
    <h1 class="number">{count}</h1>
    </div>
    <div className='btns-container'>
        <button onClick={()=>setCount(count+1)} className="increment">+</button>
        <button onClick={()=>setCount(count-1)} className="increment">-</button>
    </div>
    
    </div>
  )
}

export default Counter