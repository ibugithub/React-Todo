import TodoItem from "@/components/TodoItem"
import { useTodosCotext } from "@/context/TodoContext";

const TodosList = () => {
    const {todos} = useTodosCotext();
    console.log('The value is ', todos)
    return (
        <ul>
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo}/>
                ))
            }
        </ul>
    )
}

export default TodosList