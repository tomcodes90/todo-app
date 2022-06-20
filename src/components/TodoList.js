import TodoListItem from "./TodoListItem";
import TodoFilter from "./TodoFilter";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

function TodoList({
  clearCompleted,
  removeIcon,
  changeTodoStatus,
  setTodoList,
  todoList,
  removeTodo,
  theme,
}) {
  const [selectedFilter, setSelectedFilter] = useState("all");
  function HandleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(todoList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTodoList(items);
  }

  return (
    <div className="todo-items-wrapper">
      <DragDropContext onDragEnd={HandleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <div
              className="todo-items"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todoList
                .filter(
                  (todo) =>
                    selectedFilter === "all" ||
                    todo.isCompleted === selectedFilter
                )
                .map((todo, index) => {
                  return (
                    <TodoListItem
                      Draggable={Draggable}
                      index={index}
                      key={todo.id}
                      todo={todo}
                      removeIcon={removeIcon}
                      changeTodoStatus={changeTodoStatus}
                      removeTodo={removeTodo}
                      theme={theme}
                    />
                  );
                })}
              {provided.placeholder}
              <TodoFilter
                clearCompleted={clearCompleted}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
                theme={theme}
                todoCounter={todoList.length}
                todoList={todoList}
              />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default TodoList;
