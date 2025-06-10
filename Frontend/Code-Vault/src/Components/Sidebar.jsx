import React from 'react';
import './Styles/Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    '+Add New',
    'Topics',
    'Tags',
    'Streak 10🔥',
    'Total: 25',
  ];

  return (
    <div className="sidebar">
      <h1 className="sidebar-title">Dashboard</h1>
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="sidebar-item">
            {item}
          </li>
        ))}
      </ul>
      <div className="sidebar-footer">© Code-Vault · 2025</div>
    </div>
  );
};

export default Sidebar;