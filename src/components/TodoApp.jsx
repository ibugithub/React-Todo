import Header from '@/components/Header'
import TodosLogic from '@/components/TodosLogic';
import Navbar from '@/components/Navbar';

const TodoApp = () => {
    return (
        <>
        <Navbar />
        <Header />
        <TodosLogic />
        </>
    );
};
export default TodoApp;