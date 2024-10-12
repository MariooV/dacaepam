import React from 'react';

import './Footer.css';


interface FooterProps {
  header?: string;
}

const Footer: React.FC<FooterProps> = ({ header = "Footer Header" }) => {
  return (
    <footer className="footer">
      <h1>{ header }</h1>
    </footer>
  );
};

export default Footer;