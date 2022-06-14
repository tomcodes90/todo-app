function NewTodo({ inputHandler }) {
  return (
    <div className="new_todo_div">
      <input type="checkbox" />
      <input
        className="new_todo"
        type="text"
        placeholder="Create a new todo..."
        onClick={inputHandler}
      />
    </div>
  );
}

export default NewTodo;
