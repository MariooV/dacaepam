import React from 'react';

import './Header.css';


interface HeaderProps {
  header?: string;
}

const Header: React.FC<HeaderProps> = ({ header = "Header Header" }) => {
  return (
    <header className="header">
      <h1>{ header }</h1>
    </header>
  );
  
};

export default Header;