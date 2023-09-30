import React from "react"
import { useSelector } from "react-redux";
interface RootState {
  todos: any
}
const TodoArea:React.FC = () => {
  const selectorData = (state: RootState) => state.todos.data;
  const updatedData = useSelector(selectorData);
  return (
    <div>

    </div>
  )
}

export default TodoArea