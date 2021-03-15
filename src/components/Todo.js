import { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const Todo = () => {
  const [text, setText] = useState('')
  const [todo, setTodo] = useState([])
  const [todoUpdate, setTodoUpdate] = useState({})
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() === '') {
      return setError('Todo is required')
    }

    // get old filtered TODO
    if (todoUpdate && todoUpdate._id) {
      const getFilteredOldTodo = todo.filter(
        (old) => old._id !== todoUpdate._id
      )

      // add new updated TODO to state
      getFilteredOldTodo.unshift({
        _id: todoUpdate._id,
        text: text,
        completed: todoUpdate.completed,
      })

      setTodo(getFilteredOldTodo)
      setSuccess('Task updated successfully')
      setTimeout(() => {
        setSuccess('')
      }, 5000)

      setText('')
      setTodoUpdate({})
    } else {
      // add new TODO to state
      todo.unshift({ _id: Date.now(), text, completed: false })
      setTodo(todo)
      setText('')
      setError('')
      setSuccess('New task added successfully')
      setTimeout(() => {
        setSuccess('')
      }, 5000)
    }
  }

  const handleDelete = (id) => {
    const newTodo = todo.filter((t) => t._id !== id)
    setTodo(newTodo)

    setSuccess('Task deleted successfully')
    setTimeout(() => {
      setSuccess('')
    }, 5000)
  }

  const handleUpdate = (e) => {
    setTodoUpdate(e)
    setText(e.text)
  }

  const handleComplete = (e) => {
    const newTodo = todo.filter((t) => t._id !== e._id)
    newTodo.push({ _id: e._id, text: e.text, completed: !e.completed })
    setTodo(newTodo)

    setSuccess('Task completed successfully')
    setTimeout(() => {
      setSuccess('')
    }, 5000)
  }

  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 text-light'>
      <div className='row'>
        <div className='bg-light text-light bg-dark shadow-lg p-5'>
          <div className='col-lg-8 w-100 col-md-8 col-sm-10 col-12 '>
            <div className='mb-3'>
              <h3 className='display-6 text-center'>Todo List Manager App </h3>
              <hr />

              <div className='text-danger text-center fw-lighter'>
                {error && error}
              </div>
              <div className='text-success text-center fw-lighter'>
                {success && success}
              </div>
            </div>
            <TodoInput
              handleSubmit={handleSubmit}
              text={text}
              setText={setText}
            />
          </div>
          <div className='row'>
            <TodoList
              todo={todo}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              handleComplete={handleComplete}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
