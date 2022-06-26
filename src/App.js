import "./App.css";

import { useTheme } from "./contexts/ThemeContext";

import { TodoListProvider } from "./contexts/TodoListContext";

import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

function App() {
  const { theme } = useTheme();
  return (
    <div className={theme === "dark" ? "main" : "main light"}>
      <div className="container">
        <Header />
        <TodoListProvider>
          <NewTodo />
          <TodoList />
          <div className="mobile-todo-info">
            <TodoFilter />
          </div>
        </TodoListProvider>
        <p className="info"> Drag and drop to reorder list</p>
      </div>
    </div>
  );
}

export default App;
