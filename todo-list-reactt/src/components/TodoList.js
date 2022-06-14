function TodoList({ todoList }) {
  return todoList.map((todo) => {
    return (
      <div className="todo_div">
        <input type="checkbox" />
        <p className="todo_list_element">{todo}</p>
      </div>
    );
  });
}

export default TodoList;
