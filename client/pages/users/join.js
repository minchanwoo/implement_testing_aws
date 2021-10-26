import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const Users = () => {
  const [ name, setName ] = useState('');
  const [ nick, setNick ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const submitUser = async(e) => {
    e.preventDefault();
    
    const body = {name, nick, email, password};

    const result = await axios.post('http://localhost:4000/users', body);
    
    console.log(result)

  }

  return (
    <>
      <div>
        <Link href='/'>
          <a>
            메인페이지로 이동
          </a>
        </Link>
      </div>
      <br/>
      <div>
        <input type='text' name='name' onChange={(e) => setName(e.target.value)} />
      </div>
      <br/>
      <div>
        <input type='text' name='nick' onChange={(e) => setNick(e.target.value)} />
      </div>
      <br/>
      <div>
        <input type='text' name='email' onChange={(e) => setEmail(e.target.value)} />
      </div>
      <br/>
      <div>
        <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} />
      </div>
      <br/>
      <div>
        <button onClick={submitUser}>가입</button>
      </div>

    </>
  )
};

export default Users;