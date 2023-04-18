import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/TodoSlice";
import './addTodo.css'


const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  return (
    <>
      <h4 className="text-center my-3 pb-3">ToDo App</h4>
      <form
        className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="col-12">
          <div className="form-outline">
            <label className="form-label">Add todo</label>
            <input
              className="form-control"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
        <div className="col-12">
          <button
            className="Btn btn btn-primary"
            onClick={() => {
              dispatch(addTask({ id: Math.random(), payload: input }));
              setInput("");
            }}
          >
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTodo;
