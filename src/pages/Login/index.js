import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
  const [ email, setEmail ] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post('/sessions', { email });
    
    const { _id } = response.data;

    localStorage.setItem('assistudy@user', _id);

    history.push('/createroom')
  }

  return (
    <>
        <p>
              사용가능한 <strong>E-mail</strong> 을 입력하세요
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL</label>
          <input 
            type="email" 
            id="email" 
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <button type="submit" className="btn">입장하기</button>
        </form>
    </>
  );
}