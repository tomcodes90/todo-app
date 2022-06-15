import "../App.css";

function NewTodo({ inputHandler }) {
  return (
    <div className="new-todo">
      <div className="check">
        <div className="check-mark"></div>
      </div>
      <div className="new-todo-input">
        <form onsubmit="addItem(event)">
          <input
            id="todo-input"
            type="text"
            placeholder="Create a new todo..."
          />
        </form>
      </div>
    </div>
  );
}

export default NewTodo;
