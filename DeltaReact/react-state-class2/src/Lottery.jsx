import { useState } from "react";

export default function Lottery() {
    let [lotteryNo, setLotteryNo] = useState(100);

    let newTicket = () => {
        let n = Math.floor(100 + Math.random() * 900);
        setLotteryNo(n);
    };

    let showWon = () => {
        let n = lotteryNo;
        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10); // Ensure it remains an integer
        }
        console.log(sum);
        
        return sum;
    };

    const won = showWon() === 15;

    return (
        <div>
            <h1>Lottery {won && <span>, 'Congratulations, you won!'</span>}</h1>
            <h3>Lottery Ticket = {lotteryNo}</h3>
            <button onClick={newTicket}>Get New Ticket</button>
        </div>
    );
}
