// Core
import React from "react";
import { Link, useLocation } from "react-router-dom";

// Antd
import { Menu } from "antd";

const LeftMenu = ({ mode }) => {
  const location = useLocation();

  React.useEffect(() => {
    console.log(location.pathname);
    // Inside your component or a separate script
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

  }, [location.pathname]);

  return (
    <Menu mode={mode} style={{ fontSize: '16px', marginLeft: '5%' }}>
      <Menu.Item key="trending">
        <a href="/#trending">Trending</a>
      </Menu.Item>
      <Menu.Item key="newMovie">
        <Link to="/newmovie">New movie</Link>
      </Menu.Item>
      <Menu.Item key="aboutUs">
        <a href="/#aboutUs">About us</a>
      </Menu.Item>
      <Menu.Item key="forYou">
        <a href="/#forYou">For you</a>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
