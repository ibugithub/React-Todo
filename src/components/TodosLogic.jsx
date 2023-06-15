import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodoList";
import { TodosProvider } from '@/context/TodoContext';

const TodosLogic = () => {

  return (  
    <div>
      <TodosProvider>
        <InputTodo />
        <TodosList />
      </TodosProvider>
    </div>
  );
};
export default TodosLogic;
