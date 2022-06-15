function TodoList({ todoList, removeTodo }) {
  return todoList.map((todo) => {
    return (
      <div className="todo_div">
        <input type="checkbox" />
        <p key={todo.id} onClick={removeTodo} className="todo_list_element">
          {todo.value}
        </p>
        <label className="remove_icon"></label>
      </div>
    );
  });
}

export default TodoList;
