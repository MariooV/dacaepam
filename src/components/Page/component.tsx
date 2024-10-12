import React from 'react';

import Header from '../Header/component';
import Footer from '../Footer/component';
import Gallery from '../Gallery/component';

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
