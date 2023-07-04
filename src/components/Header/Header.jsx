import { useState } from 'react';
import './Header.css';

function Header() {

  const [user, setUser] = useState('Default');

  return (
    <div className="Header">
      <div>
        <img id='Logo' src="/1618916.svg" alt="Logo" />
      </div>
      <div>
        <p>User: {user}</p>
      </div>
      <div>
        <button className='header__button' onClick={() => alert('Exit')}>Exit</button>
      </div>
    </div>
  );
}

export default Header;