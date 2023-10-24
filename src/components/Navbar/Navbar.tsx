import { Link } from 'react-router-dom';
import './index.css';

const links = [
  { title: 'Quick Start', path: '/quick-start' },
  { title: 'Adding Interactivity', path: '/adding-interactivity' },
  { title: 'Managing State', path: '/managing-state' },
  { title: 'Escape Hatches', path: '/escape-hatches' },
  { title: 'Rick And Morty', path: '/rick-and-morty' },
];

const Navbar = () => {
  return (
    <div className="navbar-container">
      {links.map((link) => (
        <Link key={link.path} to={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
