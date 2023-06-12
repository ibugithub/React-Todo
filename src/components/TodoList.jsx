import TodoItem from "@/components/TodoItem"

const TodosList = (todos) => {
    const { todosProp } = todos
    return (
        <ul>
            {
                todosProp.map((todo) => (
                    <TodoItem key={todo.id} propItem={todo} />
                ))
            }
        </ul>
    )

}
export default TodosList