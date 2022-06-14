import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="p-3 mb-2 bg-primary text-white">
      <NewTodo />
      <TodoList />
      <TodoFilter />
    </div>
  );
}

export default App;
