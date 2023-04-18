import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, toggleDone } from "../redux/TodoSlice";

const Todo = ({ el }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState(el.payload);
  // const [num, setNum] = useState(el.id);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editTask({ id: el.id, text: input }));
    setIsEditing(false);
    console.log("Task edited");
  };
  console.log(handleEdit);

  const handleDone = () => {
    dispatch(toggleDone({ id: el.id }));
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleEdit}>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <table class="table mb-4">
            <thead>
              <tr>
                <th scope="col">Item Number</th>
                <th scope="col">Todo Item</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{el.id}</th>
                {/* or {num} */}
                <td
                  style={{
                    textDecoration: el.isDone ? "line-through" : "none",
                  }}
                >
                  {input}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteTask(el))}
                  >
                    Delete
                  </button>
                  |
                  <button
                    className="btn btn-warning ms-1"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit
                  </button>
                  |
                  <button className="btn btn-success" onClick={handleDone}>
                    {el.isDone ? "Undo" : "Done"}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Todo;
