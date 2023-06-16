import { FcFullTrash} from 'react-icons/fc'
import { FiEdit3 } from 'react-icons/fi'
import PropTypes from 'prop-types'
import { useState, useRef } from 'react';
import { useTodosCotext } from '@/context/TodoContext';
import styles from '@/css/TodoItem.module.css';

const TodoItem = ({ todo }) => {
    const {handleChange, handleDel, updateTodo} = useTodosCotext()
    const editInputRef = useRef(null)
    const [editing, setEditing] = useState(false)
    let viewMode = {};
    let editMode = {};

    const handleEditing = () => {
        setEditing(true)
    }

    const handleQuitEdit = (event) => {
        if(event.key === 'Enter'){
            setEditing(false)
            updateTodo(todo.id, event.target.value)
        }
    }

    if(editing) {
        viewMode.display = 'none'
    } else {
        editMode.display = 'none'
    }
  
    return (
        <li>
            <div style={viewMode}>
                <input type="checkbox" onChange={() => handleChange(todo.id)} />
                <button onClick={() => handleDel(todo.id)} > < FcFullTrash size='20px'/> </button>
                <button className={styles.checkbox} onClick={handleEditing} >< FiEdit3 size="20px"/></button>
                {todo.title}
            </div>

            <input style={editMode} type="text" name="" ref={editInputRef} defaultValue={todo.title} onKeyDown={handleQuitEdit}/>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    // handleChange: PropTypes.func.isRequired,
    // handleDel: PropTypes.func.isRequired,
    // updateTodo: PropTypes.func.isRequired
};


export default TodoItem