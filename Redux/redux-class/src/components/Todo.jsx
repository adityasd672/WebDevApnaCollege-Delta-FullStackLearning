import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
import AddForm from "./AddForm";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);

  const delTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  }

  const markAsDoneHandler = (id) => {
    console.log(id);
    dispatch(markAsDone(id));
  }

  return (
    <>
      <h2>Todo List App</h2>
      <AddForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={todo.isDone ? {textDecoration: "line-through"}: {}}>{todo.task}
            <button onClick={() => delTodoHandler(todo.id)}>Delete</button>
            <button onClick={() => markAsDoneHandler(todo.id)}>Mark As Done</button>
          </li>
        ))}
      </ul>
    </>
  );
}
