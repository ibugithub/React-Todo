import { useState } from "react";
import { FcAddDatabase } from 'react-icons/fc'
import { useTodosCotext } from '@/context/TodoContext';

const InputTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const [warning, setWarning] = useState('');
  const { handleNewTodo } = useTodosCotext()
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim()) {
      setInputValue('')
      setWarning('')
      handleNewTodo(inputValue)
    }
    else {
      setWarning('You can not keep it empty')
    }

  }
  return (
    <form onSubmit={handleOnSubmit}>
      input field here...
      <input
        type="text"
        name=""
        value={inputValue}
        placeholder="write todo here ...."
        onChange={handleChange}
      />
      <button type='submit'> <FcAddDatabase size="20px"/> </button>
      <span>{warning}</span>
    </form>
  )
};
export default InputTodo;
