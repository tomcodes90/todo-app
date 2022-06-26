import TodoListItem from "./TodoListItem";
import TodoFilter from "./TodoFilter";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { useTheme } from "../contexts/ThemeContext";
import { useTodoList } from "../contexts/TodoListContext";

function TodoList() {
  const { theme } = useTheme();
  const { todoList, setTodoList, selectedFilter } = useTodoList();

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
              className={theme === "dark" ? "todo-items" : "todo-items light"}
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
                    />
                  );
                })}
              {provided.placeholder}
              <TodoFilter />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default TodoList;
