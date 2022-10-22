import { TodoItemType } from "./Todo";
export default function TodoItem({ item, onItemStatusChanged }: {item: TodoItemType, onItemStatusChanged: (changedItem: TodoItemType) => void}) {

  function handleTodoItemStatusChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newItem: TodoItemType = { 
      title: item.title,
      status: e.currentTarget.checked ? 'Complete' : 'Incomplete'
    }
    onItemStatusChanged(newItem);
  }

  const strikeThroughStyle = {
    'textDecoration': 'line-through'
  }
  console.log('component mount', item.title)
  return (
    <li>
      <input type="checkbox" defaultChecked={item.status === 'Complete'} onChange={handleTodoItemStatusChange}/>
      <span style={item.status === 'Complete' ? strikeThroughStyle : {}}>{item.title}</span>
    </li>
  );
}