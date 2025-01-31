import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/addTodo.module.css";
import { handleAddTodo } from "../redux/actions/todos/addTodo/addTodoAction";
import { useState } from "react";
import { handleGetTodo } from "../redux/actions/todos/getTodo/getTodoAction";
import { handleSendTodo } from "../utils/todoUtils";

function AddTodo() {
  const { message } = useSelector((state) => state.addTodoReducer);
  // console.log("Val", message);
  const [addTodo, setAddTodo] = useState({
    title: "",
  });
  const dispatch = useDispatch();

 
  return (
    <>
      <div className={styles.addTodoContainer}>
        <input
          className="p-[7px] border-2 border-indigo-500 rounded-md hover:border-lightBlue"
          type="text"
          placeholder="Add Todo"
          value={addTodo.title}
          onChange={(e) =>
            setAddTodo({
              ...addTodo,
              title: e.target.value,
            })
          }
        />
        <button
          onClick={() => handleSendTodo(dispatch, addTodo, setAddTodo)}
          className="border-2  bg-lightBlue text-lightgrey  hover:bg-primary hover:cursor-pointer p-[9px] rounded-md"
        >
          Add Todo
        </button>
      </div>
    </>
  );
}

export default AddTodo;
