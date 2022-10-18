import React from 'react'
import './FormStyles.css'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
            <label>Details</label>
            <textarea rows='6' placeholder='Type a message_' />
            <button className='btn'>Send</button>
        </form>

    </div>
  )
}

export default Form