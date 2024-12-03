import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <div className="container">
        <div className="navigation">
          <div className='logo'>
            <a href="/">
              <img className='logo__img' src="../src/images/logo.svg" alt="logo" />
            </a>
          </div>
          <nav className='navigation_items'>
            <Link className='navigation__item' to="/">Home</Link>
            <Link className='navigation__item' to="/cart">Cart</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;