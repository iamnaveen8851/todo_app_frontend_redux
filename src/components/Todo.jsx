import { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetTodo } from "../redux/actions/todos/getTodo/getTodoAction";
import AddTodo from "./AddTodo";

function Todo() {
  const dispatch = useDispatch();
  const { data, message } = useSelector((state) => state.getTodoReducer);
  // const todoData = use(dispatch(handleGetTodo()));
  useEffect(() => {
    dispatch(handleGetTodo());
  }, [dispatch]);

  console.log(data);
  return (
    <>
      <AddTodo />

      {/* Add Todo input with button to create todo */}
      {/* Display todo items */}
      <br />
      <h2>Style all todos here </h2>
      <br />
      {JSON.stringify(data)}
    </>
  );
}

export default Todo;
