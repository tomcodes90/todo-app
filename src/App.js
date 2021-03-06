import "./App.css";

import { useTheme } from "./contexts/ThemeContext";

import { TodoListProvider } from "./contexts/TodoListContext";

import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import StatusAndFilter from "./components/StatusAndFilter";

function App() {
  const { theme } = useTheme();
  return (
    <main
      className={theme === "dark" ? "main-container" : "main-container light"}
    >
      <div className="container">
        <Header />
        <TodoListProvider>
          <TodoInput />
          <TodoList />
          <div className="mobile-todo-info">
            <StatusAndFilter />
          </div>
        </TodoListProvider>
        <footer>
          <p className="info"> Drag and drop to reorder list</p>
        </footer>
      </div>
    </main>
  );
}

export default App;
