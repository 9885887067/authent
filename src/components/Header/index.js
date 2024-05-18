// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <ul className="header-container">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="para">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
)

export default Header
