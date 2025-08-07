// components/Layout.js
import React from 'react';
import Navbar from './Navbar';      // Make sure this file exists
import Footer from './Footer';      // Make sure this file exists

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
