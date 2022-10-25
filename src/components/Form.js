import React from 'react'
import './FormStyles.css'


const Form = () => {
  return (
      <div className='form'>
        <form action="https://formsubmit.co/info@klugcode.dev" method='POST'>
          <label>Your Name</label>
          <input name='name' type='text' required></input>
          <label>Email</label>
          <input name='email' type='email' required></input>
          <input type="hidden" name="_subject" value="New message from your site!"></input>
          <label>Details</label>
          <textarea name='message' rows='6' placeholder='Type a message_' required />
          <button className='btn' type='submit'>Send</button>
        </form>
      </div>
  )
}

export default Form