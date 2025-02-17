import { useState } from "react"
import { v4 as uuidv4} from "uuid"


export default function TodoList() {
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
       
            setTodos((prevTodos) => {
                return  [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}]
            })
            setNewTodo("")
        
        
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
        
    } 

    let deleteTodo = (id) => {
        
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
        
    }

    let markAllAsDone = () => {
        setTodos((prevTodos) => 
            (prevTodos.map((todo) => {
            return {
                ...todo, isDone: true
            }
            
        })))
    }

    let upperCaseOne = (id) => {
        setTodos((prevTodos) => 
            (prevTodos.map((todo) => {
                if(todo.id == id) {
                    return {
                        ...todo, task: todo.task.toUpperCase() 
                    }
                } else {
                    return todo;
                }
            
            
        })))
        
    }
    let markAsDone = (id) => {
        setTodos((prevTodos) => 
            (prevTodos.map((todo) => {
                if(todo.id == id) {
                    return {
                        ...todo, isDone: true 
                    }
                } else {
                    return todo;
                }
            
            
        })))
        
    }

    

    return (
        <div>
            <input type="text" placeholder="add a task" value={newTodo} id="task" onChange={updateTodoValue}/><br /><br />
            <button onClick={addNewTask}> 
                Add Task
            </button>
            <br />
            <br />
            <br />
            <br />
            <hr />
            <h4>Tasks Todo </h4>
            <ul>           
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span> &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}> Delete </button>
                            <button onClick={() => upperCaseOne(todo.id)}> Update one </button>
                            <button onClick={() => markAsDone(todo.id)}> Mark as Done </button>
                        
                        </li>
                    ))
                }
            </ul>
            <br /><br />
            <button onClick={markAllAsDone}>Mark All Done</button>
        </div>
    )

}