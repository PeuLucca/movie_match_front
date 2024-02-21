import React from "react";
import { Menu, Avatar } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

const RightMenu = ({ mode }) => {
  const logUserOut = () => {
    localStorage.removeItem("token")
    window.location.reload();
  };

  return (
    <Menu mode={mode} style={{ marginRight: '25px' }}>
      <Menu.SubMenu
        title={
          <>
            <Avatar icon={<UserOutlined />} />
            <span className="username">John Doe</span>
          </>
        }
      >
        <Menu.Item key="log-out" onClick={logUserOut}>
          <LogoutOutlined /> Logout
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default RightMenu;
