import { Outlet, Link } from "react-router-dom";
// import Dropdown from 'react-bootstrap/Dropdown';
import { NavDropdown } from 'react-bootstrap';

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        {/* <nav className="navbar navbar-expand-sm bg-dark navbar-dark"> */}
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
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/contact">Action</NavDropdown.Item>
              <NavDropdown.Item href="/blogs">Another action</NavDropdown.Item>
              <NavDropdown.Item href="/">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;