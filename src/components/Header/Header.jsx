import './Header.css';

let user = "Grankov";

function Header() {
  return (
    <div className="Header">
      <div>
        <img id='Logo' src="/1618916.svg" alt="Logo" />
      </div>
      <div>
        <p>User: {user}</p>
      </div>
      <div>
        <button className='header__button'>Exit</button>
      </div>
    </div>
  );
}

export default Header;