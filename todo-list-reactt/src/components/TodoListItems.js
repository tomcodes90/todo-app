function TodoListItems({ checkMark, removeIcon, todoList, removeTodo }) {
  return todoList.map((todo) => {
    return (
      <div key={todo.id} id={todo.id} className="todo-item">
        <div className="check">
          <div className="check-mark">
            <img src={checkMark} />
          </div>
        </div>
        <div className="todo-text">{todo.value}</div>
        <div className="todo-remove">
          <div className="todo-remove-icon">
            <img onClick={removeTodo} src={removeIcon} />
          </div>
        </div>
      </div>
    );
  });
}

export default TodoListItems;
