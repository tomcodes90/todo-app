function NewTodo({ inputHandler }) {
  return (
    <div onClick={inputHandler} className="new_todo_div">
      <input type="checkbox" />
      <input
        className="new_todo"
        type="text"
        placeholder="Create a new todo..."
      />
    </div>
  );
}

export default NewTodo;
