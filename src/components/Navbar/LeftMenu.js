import React from "react";
import { Menu } from "antd";

const LeftMenu = ({ mode }) => {
  return (
    <Menu mode={mode} style={{ fontSize: '16px', marginLeft: '5%' }}>
      <Menu.Item key="home">Home</Menu.Item>
      <Menu.Item key="movies">Movies</Menu.Item>
      <Menu.Item key="4you">For You</Menu.Item>
      <Menu.Item key="aboutUs">About Us</Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
