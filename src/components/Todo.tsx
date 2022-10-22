import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";

import { useState } from "react";

export type TodoItemType = {
  title: String;
  status: 'Complete' | 'Incomplete';
}

export default function Todo() {
  const [todoList, setTodoList] = useState([{title: 'Eating breakfast', status: 'Incomplete'}, {title: 'Checking emails', status: 'Complete'}] as TodoItemType[]);
  
  function handleNewTodoItem (newTodoItem: TodoItemType) {
    setTodoList(todoList.concat(newTodoItem));
  }

  function handleTodoItemStatusChange(changedItem: TodoItemType) {
    const index = todoList.findIndex((item) => item.title === changedItem.title);
    todoList[index] = changedItem;
    setTodoList([...todoList]);
  }
  
  return (
    <div className="Todo-container">
      <TodoSearch onNewTodoItem={handleNewTodoItem}/>
      <TodoList todoItems={todoList} onItemChanged={handleTodoItemStatusChange}/>
    </div>
  );
}
