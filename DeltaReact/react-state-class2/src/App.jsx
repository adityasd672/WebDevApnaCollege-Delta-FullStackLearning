import './App.css'
import { sum } from './helper'
import Lottery from './Lottery'
import Lottery1 from './Lottery1'
import LudoBoard from './LudoBoard'
import Ticket from './Ticket'
import TicketNum from './TicketNum'
import TodoList from './TodoList'
function App() {

    let winCondition = (ticket) => {
      return ticket.every((num) => num === ticket[0]);
    }
  return (
    <>
      <Lottery1 n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
