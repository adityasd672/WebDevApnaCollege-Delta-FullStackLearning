import { useState, useEffect } from "react"

export default function Counter() {

    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let incCountX = () => {
        setCountx((currCount) => currCount + 1);
    }
    let incCountY = () => {
        setCounty((currCount) => currCount + 1);
    }

    useEffect(function printSomething() {
        
        console.log("this is a side-effect");
        
        
    }, [])

    return (
        <div>
            <h3>CountX = {countx}</h3>
            <button onClick={incCountX}>+1</button>
            <h3>CountY = {county}</h3>
            <button onClick={incCountY}>+1</button>
        </div>
    )
}