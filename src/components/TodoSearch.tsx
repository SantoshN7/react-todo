import { TodoItemType } from "./Todo";
import { useState } from 'react';

export default function TodoSearch({onNewTodoItem}: {onNewTodoItem: (newTodoItem: TodoItemType) => void}) {
  let [task, setTask] = useState('');
  let [shouldShowEmptyStringError, setShouldShowEmptyStringError] = useState(false);

  function onAddTodoItem() {
    if (!task) {
      setShouldShowEmptyStringError(true);
      return;
    }
    const newTodoItem: TodoItemType = {
      title: task,
      status: 'Incomplete'
    }
    onNewTodoItem(newTodoItem)
    setTask('')
  }

  function handleTaskInput(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value)
    setShouldShowEmptyStringError(false);
  }

  return (
    <div className="Todo-search-container">
      <div className="Todo-input-field">
        <input type="text" value={task} onChange={handleTaskInput}/>
        { shouldShowEmptyStringError && <span>Input field is empty</span> }
      </div>
      <button type="button" onClick={onAddTodoItem}>Add</button>
    </div>
  )
}