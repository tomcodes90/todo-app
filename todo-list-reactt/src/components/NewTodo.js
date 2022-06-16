import "../App.css";

function NewTodo({ inputHandler, inputHandlerOnClick }) {
  return (
    <div className="new-todo">
      <div className="check">
        <div onClick={inputHandlerOnClick} className="check-mark"></div>
      </div>
      <div className="new-todo-input">
        <form onSubmit={inputHandler}>
          <input type="text" placeholder="Create a new todo..." />
        </form>
      </div>
    </div>
  );
}

export default NewTodo;
