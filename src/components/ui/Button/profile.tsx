import React from "react";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Avatar, Space } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Profile",
  },
  {
    key: "2",
    label: "Settings",
    icon: <SettingOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "3",
    icon: <LogoutOutlined />,
    danger: true,
    label: "Log out",
  },
];

export const Profile = () => {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <Avatar
            style={{
              backgroundColor: "#93D577",
            }}
            icon={<UserOutlined />}
          />
        </Space>
      </a>
    </Dropdown>
  );
};
