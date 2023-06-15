import { Outlet, Link } from "react-router-dom";
// import Dropdown from 'react-bootstrap/Dropdown';

const Layout = () => {
  return (
    <>
      {/* <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"> */}
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <Link className="navbar-brand" to="/">Chat GPT</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blogs">Blogs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          {/* <!-- Dropdown --> */}
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="#/" id="navbardrop" data-toggle="dropdown">
              Dropdown link
            </Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" href="#/action-1">Action 1</Link>
              <Link className="dropdown-item" href="#/action-2">Action 2</Link>
              <Link className="dropdown-item" href="#/action-3">Action 3</Link>
            </div>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;