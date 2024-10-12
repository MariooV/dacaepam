import React from 'react';

import './Footer.css';


interface FooterProps {
  header?: string;
}

const Footer: React.FC<FooterProps> = ({ header }) => {
  return (
    <footer className="footer">
      <h1>{ header || "Footer Header" }</h1>
    </footer>
  );
};

export default Footer;