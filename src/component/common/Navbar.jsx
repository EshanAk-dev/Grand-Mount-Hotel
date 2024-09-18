import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faSignInAlt, faHotel} from '@fortawesome/free-solid-svg-icons';



function Navbar(){

    const isAuthenticated = ApiService.isAuthenticated();
    const isAdmin = ApiService.isAdmin();
    const isUser = ApiService.isUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        const isLogout = window.confirm('Are you sure you want to logout this user?');
        if (isLogout) {
            ApiService.logout();
            navigate('/home');
        }
    };

    return (
      <nav className="navbar">
        <div className="navbar-brand h2">
          <NavLink to="/home">
            <FontAwesomeIcon icon={faHotel} style={{ marginRight: "10px" }} />
            Grand Mount Hotel
          </NavLink>
        </div>
        <ul className="navbar-ul h2">
          <li>
            <NavLink to="/home" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/rooms" activeclassname="active">
              Rooms
            </NavLink>
          </li>
          <li>
            <NavLink to="/find-booking" activeclassname="active">
              Find Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" activeclassname="active">
              Contact us
            </NavLink>
          </li>

          {isUser && (
            <li>
              <NavLink to="/profile" activeclassname="active">
                Profile
              </NavLink>
            </li>
          )}
          {isAdmin && (
            <li>
              <NavLink to="/admin" activeclassname="active">
                Admin
              </NavLink>
            </li>
          )}

            {!isAuthenticated && (
            <li>
                <NavLink to="/login" activeClassName="active">
                <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: '8px' }} />
                Login
                </NavLink>
            </li>
            )}

          {!isAuthenticated && (
            <li>
              <NavLink to="/register" activeclassname="active">
                Register
              </NavLink>
            </li>
          )}
          {isAuthenticated && (
            <li onClick={handleLogout}>
              <NavLink to="/">
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  style={{ marginRight: "8px" }}
                />
                Logout
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    );

}

export default Navbar;