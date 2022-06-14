function TodoList({ todoList }) {
  return todoList.map((todo) => {
    return (
      <div className="todoInput">
        <p>{todo}</p> <button></button>
      </div>
    );
  });
}

export default TodoList;
