import { TodoItemType } from "./Todo";
import { useRef } from 'react';

export default function TodoSearch({onNewTodoItem}: {onNewTodoItem: (newTodoItem: TodoItemType) => void}) {
  let inputRef = useRef(null);

  function onAddTodoItem() {
    const newTodoItem: TodoItemType = {
      title: inputRef.current?.value,
      status: 'Incomplete'
    }
    onNewTodoItem(newTodoItem)
  }
  
  return (
    <div className="Todo-search-container">
      <input type="text" ref={inputRef}/>
      <button type="button" onClick={onAddTodoItem}>Add</button>
    </div>
  )
}