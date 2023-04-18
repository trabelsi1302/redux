import AddTodo from "./component/addTodo/AddTodo";
import Navbar from "./component/Navbar";
import TodoList from "./component/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App vh-100">
      <Navbar />
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-lg-9 col-xl-7">
          <div class="card rounded-3">
            <div class="card-body p-4">
              <AddTodo />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
