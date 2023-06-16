import {
    createContext,
    useContext,
    useState,
    useEffect,
} from "react";
import { v4 as uid } from 'uuid'
import PropTypes from 'prop-types'
const TodosContext = createContext(null)

export const TodosProvider = ({ children }) => {

    const getTodos = () => {
        const temp = localStorage.getItem('todos')
        const collectedTodos = JSON.parse(temp)
        return collectedTodos || [];
      }
    
      const [todos, setTodos] = useState(getTodos())
      useEffect(() => {
        const temp = JSON.stringify(todos);
        localStorage.setItem('todos', temp)
      }, [todos])
    
      const handleChange = (id) => {
        setTodos((prevState) =>
          prevState.map((todo) => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed,
              };
            }
            return todo;
          })
        );
      }
    
      const handleDel = (id) => {
        console.log('Elete button clicked and the id is ', id)
        setTodos([
          ...todos.filter((todo) => { return todo.id !== id })
        ])
      }
    
      const handleNewTodo = (title) => {
        const newTodo = {
          id: uid(),
          title: title,
          completed: false,
        }
        setTodos([...todos, newTodo])
      }
    
      const updateTodo = (id, title) => {
        setTodos(
          todos.map((todo) => {
            if (id === todo.id) {
              console.log('the title is ', title)
              todo.title = title
              console.log('the todo title is ', todo.title)
            }
            return todo
          })
        );
      }
    return (
        <TodosContext.Provider value={{
            todos,
            handleNewTodo,
            handleChange,
            updateTodo,
            handleDel,
        }}>
            {children}
        </TodosContext.Provider>
    );
}

TodosProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

const useTodosCotext = () => {
    return useContext(TodosContext)
}

export { useTodosCotext }