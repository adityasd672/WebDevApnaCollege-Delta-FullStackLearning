import { useState } from "react"

function init() {
    console.log("init was executed");
    
    return Math.floor(Math.random() * 10) + 1;
}

export default function Counter() {

    
    let [count, setCount] = useState(init); // initialization
    
    console.log("Componenet is rendered!");
    console.log(`count = ${count}`);
    
    let incCount = () => {
        setCount((currCount) => {
            return currCount + 1;
        } );
        
        // setCount(25)
        
    }
    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}