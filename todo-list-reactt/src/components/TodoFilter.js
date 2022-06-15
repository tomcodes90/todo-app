function TodoFilter() {
  return (
    <>
      <div className="todo_div status_and_clear">
        <p onClick=""> 5 items left</p>
        <p className="clear" onClick="">
          Clear Completed
        </p>
      </div>
      <div className="todo_div filters">
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>
    </>
  );
}

export default TodoFilter;
