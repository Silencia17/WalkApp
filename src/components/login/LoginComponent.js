import React, { useState, useEffect } from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
// import axios from 'axios';

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

export default function LoginComponent () {
  return (
    <div className='login-wrapper'>
      <form className='login-form'>
        <h1 id='login'>Login</h1>
        <input placeholder='email' />
        <input placeholder='Password' />
        <button className='myButton'>Sign in</button>
        <Link to='/registration'>
          <button className='myButton'>Registration</button>
        </Link>
      </form>
    </div>
  )
}

// let [loading, setLoading] = useState(true);
//
// let [lastName, setLastName] = useState('Kolya')
// let [users, setUsers] = useState([])
//
// useEffect(async () => {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
//   setLoading(false)
//   setUsers(response.data)
//   console.log(response.data)
// }, [])
// return (
//   <>
//     <div className="sweet-loading">
//       <ClipLoader loading={loading} css={override} size={150} />
//     </div>
//     <div className='users'>
//       {users.map((user) => {
//         console.log(user)
//         return (<div onClick={() => show(user)} className='user'>
//           <div className='user-information'> FirstName:{user.phone}</div>
//           <div className="user-information">LastName:{user.email}</div>
//           <div className="user-information">Age:{user.name}</div>
//       </div>)
//       })}
//     </div>
//   </>

// <div className='login'>
//   <h1>Login: {firstName} lastName: {lastName} </h1>
//   <input onChange={(event) => setLastName(event.target.value)}  />
//   <button onClick={() => changeName('Valera')}>Change name</button>
//   <form>
//     <div><input placeholder={"Login"}/></div>
//     <div><input placeholder={"Password"}/></div>
//     <div><button className='myButton'>Sign in</button></div>
//   </form>
// </div>
// );
