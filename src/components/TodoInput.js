import React from 'react'

const TodoInput = ({ handleSubmit, text, setText }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className='input-group mb-3'>
        <input
          autoComplete='off'
          type='text'
          name='text'
          className='form-control border-0 shadow-none '
          placeholder='Add New Task'
          value={text}
          autoFocus
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className='input-group-text border-0 shadow-none btn btn-light 
      '
        >
          <span className='fa fa-plus-circle fs-3 text-primary' />
        </button>
      </div>
    </form>
  )
}

export default TodoInput
