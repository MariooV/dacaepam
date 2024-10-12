import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';

import './Page.css';


const Page: React.FC = () => {
    return (
      <div className="page">
        <Header header="Welcome to the Photo Gallery!" />
        <Gallery />
        <Footer header="Thanks for visiting!"/>
      </div>
    );
  };
  
  export default Page;
