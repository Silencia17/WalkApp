import React from 'react'
import './styles.scss'

export default function registration () {
  return (
    <div className='registration-wrapper'>
      <form className='registration-form'>
        <h1 id='registration'>Registration</h1>
        <input placeholder='FirstName' />
        <input placeholder='SecondName' />
        <input placeholder='email' />
        <input placeholder='Password' />
        <button className='myButton'>Sign up</button>
      </form>
    </div>
  )
}
