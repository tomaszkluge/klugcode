import React from 'react'
import './FormStyles.css'
import mail from './mail.php'
import msg from './msg.php'

const Form = () => {
  return (
      <div className='form'>
        <form action={mail} method='post'>
          <label>Your Name</label>
          <input name='name' type='text'></input>
          <label>Email</label>
          <input name='email' type='email'></input>
          <label>Subject</label>
          <input type="text" name="Subject"></input>
          <label>Details</label>
          <textarea name='comment' rows='6' placeholder='Type a message_' />
          <button className='btn'>Send</button>
        </form>
      </div>
  )
}

export default Form