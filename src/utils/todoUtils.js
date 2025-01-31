import { handleAddTodo } from "../redux/actions/todos/addTodo/addTodoAction";
import { handleDeleteTodo } from "../redux/actions/todos/deleteTodo/deleteTodoAction";
import { handleGetTodo } from "../redux/actions/todos/getTodo/getTodoAction";
import { handleUpdateTodo } from "../redux/actions/todos/updateTodo/updateTodoAction";

// Handle Add Todo
export const handleSendTodo = async (dispatch, addTodo, setAddTodo) => {
    try {
      await dispatch(handleAddTodo(addTodo));
      dispatch(handleGetTodo());
      setAddTodo({ ...addTodo, title: "" });
    } catch (error) {
      console.error(error);
    }
  };


// Hanlde Update Todo
export const handleUpdate = async (
  dispatch,
  id,
  updatedValues,
  setEditingTodoId,
  setIsEditClicked,
  setUpdatedValues
) => {
  try {
    await dispatch(handleUpdateTodo(id, updatedValues));
    setEditingTodoId(null); // Close the input box after submission
    setUpdatedValues({ title: "", status: false }); // Reset the input field
    setIsEditClicked(false); // Hide edit button after submission
    dispatch(handleGetTodo()); // Refresh the data after updating
  } catch (error) {
    console.log("Error updating", error);
  }
};

// Handle Delete Todo
export const handleDelete = async (dispatch, id) => {
  try {
    // write logic to dispatch the id and delete todo
    await dispatch(handleDeleteTodo(id));
    dispatch(handleGetTodo());
  } catch (error) {
    console.error(error);
  }
};
