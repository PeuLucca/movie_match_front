import React from "react";
import { Menu } from "antd";

const LeftMenu = ({ mode }) => {
  return (
    <Menu mode={mode} style={{ fontSize: '16px', marginLeft: '5%' }}>
      <Menu.Item key="trending">Trending</Menu.Item>
      <Menu.Item key="newMovie">Add movie</Menu.Item>
      <Menu.Item key="aboutUs">About us</Menu.Item>
      <Menu.Item key="4you">For you</Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
