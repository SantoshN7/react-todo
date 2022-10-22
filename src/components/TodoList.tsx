import TodoItem from "./TodoItem";
import { TodoItemType } from "./Todo";

export default function TodoList({todoItems, onItemChanged}: {todoItems: TodoItemType[], onItemChanged: (changedItem: TodoItemType) => void}) {
  const todoListEl = todoItems.map((item: TodoItemType, index: number) => <TodoItem key={index} item={item} onItemStatusChanged={onItemChanged}/>)
  return (
    <div className="Todo-list-container">
      <ul>
        {todoListEl}
      </ul>
    </div>
  );
}