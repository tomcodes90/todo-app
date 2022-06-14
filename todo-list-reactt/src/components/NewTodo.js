function NewTodo({ inputHandler }) {
  return (
    <>
      <input
        className="todoInput"
        type="text"
        placeholder="Create a new todo..."
        onClick={inputHandler}
      />
    </>
  );
}

export default NewTodo;
