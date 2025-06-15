import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBell,
  faCog,
  faUser,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ onLogout }) => {
  const [userData, setUserData] = useState({ name: 'User', role: 'Member' });
  const [notifications, setNotifications] = useState([]);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }

    // Example notifications
    setNotifications([
      { id: 1, message: 'New comment on your task', time: 'Just now', read: false },
      { id: 2, message: 'Project deadline today', time: '1h ago', read: true }
    ]);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-3">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-info" to="/dashboard">
          TaskManager<span className="text-light">Pro</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-controls="mainNavbar"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="mainNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tasks">My Tasks</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <div className="position-relative">
              <FontAwesomeIcon icon={faBell} className="text-light fs-5" />
              {unreadCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {unreadCount}
                </span>
              )}
            </div>

            <FontAwesomeIcon icon={faCog} className="text-light fs-5" />

            <div className="d-flex align-items-center text-light gap-2">
              <FontAwesomeIcon icon={faUser} className="fs-4 text-info" />
              <div className="d-none d-sm-block">
                <div className="fw-semibold">{userData.name}</div>
                <div className="small text-secondary">{userData.role}</div>
              </div>
            </div>

            <button onClick={onLogout} className="btn btn-sm btn-outline-light">
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;