import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetTodo } from "../redux/actions/todos/getTodo/getTodoAction";
import AddTodo from "./AddTodo";
// utility functions
import { handleDelete, handleUpdate } from "../utils/todoUtils";

function Todo() {
  const dispatch = useDispatch();
  const { data, username } = useSelector((state) => state.getTodoReducer);
  const [editingTodoId, setEditingTodoId] = useState(null); // To track the todo being edited
  const [updatedValues, setUpdatedValues] = useState({
    title: "",
    status: false,
  }); // To store the updated title and status
  const [isEditClicked, setIsEditClicked] = useState(false); // To hide Delete button

  useEffect(() => {
    dispatch(handleGetTodo());
  }, [dispatch]);

  return (
    <>
      <AddTodo />
      <br />
      <h2 className="text-center bg-lightPink text-secondary p-[10px]">
        Todos Data Of {username}
      </h2>
      <br />
      <div className="mobile:w-[90vw] tablet:w-[90vw] desktop:w-[80vw] desktop:grid desktop:grid-cols-3 tablet:grid tablet:grid-cols-2 tablet:gap-2 mobile:grid mobile:grid-col-1 mobile:gap-2 desktop:gap-8 mobile:justify-around tablet:justify-around desktop:justify-around desktop:items-center tablet:items-center mobile:items-center desktop:m-auto tablet:m-auto mobile:m-auto">
        {data.map((todo) => (
          <div
            className={`border-2 border-dotted mobile:w-fit tablet:w-fit desktop:w-fit desktop:p-[35px] tablet:p-[30px] mobile:p-[20px] mobile:flex tablet:flex desktop:flex mobile:gap-[10px] tablet:gap-[10px] desktop:gap-[10px] mobile:justify-around tablet:justify-around desktop:justify-around mobile:items-center tablet:items-center desktop:items-center mobile:m-auto tablet:m-auto desktop:m-auto ${
              todo.status ? "bg-lightGreen" : "bg-lightRed"
            } ${
              todo.status ? "hover:bg-darkGreen" : "hover:bg-darkRed"
            } hover:text-secondary rounded-md`}
            key={todo._id}
          >
            <div>
              {editingTodoId === todo._id ? (
                <div>
                  {/* Input for editing the title */}
                  <input
                    type="text"
                    value={updatedValues.title}
                    onChange={(e) =>
                      setUpdatedValues({
                        ...updatedValues,
                        title: e.target.value,
                      })
                    }
                    placeholder="Edit title"
                    className="p-2 border rounded-md mb-2"
                  />
                  <br />
                  {/* Checkbox for editing the status */}
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={updatedValues.status}
                      onChange={(e) =>
                        setUpdatedValues({
                          ...updatedValues,
                          status: e.target.checked,
                        })
                      }
                    />
                    Completed
                  </label>
                  <br />
                  <button
                    onClick={() =>
                      handleUpdate(
                        dispatch,
                        todo._id,
                        updatedValues,
                        setEditingTodoId,
                        setIsEditClicked,
                        setUpdatedValues
                      )
                    }
                    className="p-2 border-2 bg-lightBlue hover:bg-primary text-accent rounded-md mt-2"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => {
                      setEditingTodoId(null);
                      setIsEditClicked(!isEditClicked);
                    }} // Cancel editing
                    className="p-2 border-2 bg-lightRedBtn hover:bg-darkRedBtn text-accent rounded-md mt-2 ml-2"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <p>Title : {todo.title}</p>
                  <p>Status : {todo.status ? "Completed" : "Pending"}</p>
                  <p>Date : {todo.createdAt}</p>
                  <p>Created By : {todo.username}</p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleDelete(dispatch, todo._id)}
                className={`p-2 border-2 bg-lightRedBtn hover:bg-darkRedBtn text-accent rounded-md ${
                  isEditClicked ? "invisible" : "visible"
                }`}
              >
                Delete
              </button>
              {editingTodoId !== todo._id && (
                <button
                  onClick={() => {
                    setEditingTodoId(todo._id); // Enable editing for the specific todo
                    setUpdatedValues({
                      title: todo.title,
                      status: todo.status,
                    }); // Set initial values for editing
                    setIsEditClicked(!isEditClicked); // Show Delete button
                  }}
                  className="p-2 border-2 bg-lightBlue hover:bg-primary text-accent rounded-md"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Todo;
