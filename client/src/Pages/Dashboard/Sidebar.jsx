import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faUserAstronaut,
  faBrain,
  faMicrochip,
  faShieldAlt,
  faCogs,
  faChartLine,
  faDatabase,
  faRobot
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const menuItems = [
    {
      title: 'Dashboard',
      icon: faTachometerAlt,
      path: '/dashboard',
      submenu: null
    },
    {
      title: 'Neural Profile',
      icon: faUserAstronaut,
      path: '/dashboard/profile',
      submenu: null
    },
    {
      title: 'Cybernetics',
      icon: faMicrochip,
      path: null,
      submenu: [
        { title: 'Implants', path: '/dashboard/implants' },
        { title: 'Enhancements', path: '/dashboard/enhancements' },
        { title: 'Maintenance', path: '/dashboard/maintenance' }
      ]
    },
    {
      title: 'Cognition',
      icon: faBrain,
      path: '/dashboard/cognition',
      submenu: null
    },
    {
      title: 'Security',
      icon: faShieldAlt,
      path: '/dashboard/security',
      submenu: null
    },
    {
      title: 'Systems',
      icon: faCogs,
      path: null,
      submenu: [
        { title: 'Diagnostics', path: '/dashboard/diagnostics' },
        { title: 'Performance', path: '/dashboard/performance' },
        { title: 'Updates', path: '/dashboard/updates' }
      ]
    },
    {
      title: 'Analytics',
      icon: faChartLine,
      path: '/dashboard/analytics',
      submenu: null
    },
    {
      title: 'Data Core',
      icon: faDatabase,
      path: '/dashboard/data',
      submenu: null
    }
  ];

  const toggleSubmenu = (title) => {
    if (activeSubmenu === title) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(title);
    }
  };

  return (
    <aside className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-header">
        <button 
          className="sidebar-toggle" 
          onClick={() => setExpanded(!expanded)}
        >
          <div className={`hamburger ${expanded ? 'expanded' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        {expanded && (
          <div className="sidebar-brand">
            <FontAwesomeIcon icon={faRobot} className="glow-primary" />
            <span>NEXUS</span>CORE
          </div>
        )}
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <div key={index} className="sidebar-group">
            {item.path ? (
              <Link
                to={item.path}
                className={`sidebar-item ${
                  location.pathname === item.path ? 'active' : ''
                }`}
              >
                <FontAwesomeIcon icon={item.icon} />
                {expanded && <span>{item.title}</span>}
              </Link>
            ) : (
              <>
                <div
                  className={`sidebar-item ${
                    activeSubmenu === item.title ? 'active' : ''
                  }`}
                  onClick={() => toggleSubmenu(item.title)}
                >
                  <FontAwesomeIcon icon={item.icon} />
                  {expanded && (
                    <>
                      <span>{item.title}</span>
                      <FontAwesomeIcon 
                        icon="chevron-down" 
                        className={`chevron ${
                          activeSubmenu === item.title ? 'rotated' : ''
                        }`}
                      />
                    </>
                  )}
                </div>
                {expanded && activeSubmenu === item.title && (
                  <div className="submenu">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className={`submenu-item ${
                          location.pathname === subItem.path ? 'active' : ''
                        }`}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="system-status">
          <div className="status-indicator active"></div>
          {expanded && <span>System: Online</span>}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;