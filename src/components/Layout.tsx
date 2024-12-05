import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/">🛍️ Product Catalog</Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>
    </header>
    <main className="main container">{children}</main>
    <footer className="footer">
      <p>© 2024 Product Catalog</p>
    </footer>
  </div>
);




export default Layout;
