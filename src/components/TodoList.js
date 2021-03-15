import React from 'react'

const TodoList = ({ todo, handleDelete, handleUpdate, handleComplete }) => {
  return (
    <div className='col-lg-8 w-100 col-md-8 col-sm-10 col-12 '>
      {todo.length > 0 &&
        todo.map((todo) => (
          <div
            key={todo._id}
            className='d-flex list-zoom justify-content-between p-3 my-2 shadow-lg'
          >
            <span
              className={`${
                todo.completed && 'text-decoration-line-through text-muted'
              }  `}
            >
              {todo.text}
            </span>
            <div className='btn-group'>
              {!todo.completed && (
                <>
                  <span
                    onClick={() => handleComplete(todo)}
                    className='fa fa-check-circle text-success btn-action '
                  />
                  <span
                    onClick={() => handleUpdate(todo)}
                    className='fa fa-edit text-primary mx-2 btn-action '
                  />
                </>
              )}
              <span
                onClick={() => handleDelete(todo._id)}
                className='fa fa-times-circle text-danger btn-action '
              />
            </div>
          </div>
        ))}
    </div>
  )
}

export default TodoList
