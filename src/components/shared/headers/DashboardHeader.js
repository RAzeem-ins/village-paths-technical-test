import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Menu, Avatar, Popover, Typography, Space } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/auth/reducer";
import VillageHubLogo from "../../../assets/VillageHubLogo.svg";

const DashboardHeader = () => {
  const { Text } = Typography;
  const [visible, setVisible] = useState(false);
  const { SubMenu } = Menu;

  const dispatch = useDispatch();
  const history = useHistory();
  const handleVisibleChange = (visible) => {
    setVisible(visible);
  };
  const onLogout = () => {
    dispatch(logout());
    history.push("/onBoarding");
  };

  const switchToPath = () => {
    window.location.href = "https://www.villagepaths.com/";
  };

  return (
    <div>
      <Menu className="dashboard-header" selectedKeys={[]} mode="horizontal">
        <Menu.Item className="" key="paths">
          <img src={VillageHubLogo} alt="header logo" />
        </Menu.Item>
        <Menu.Item>
          <Link to="/dashboard">
            <Space style={{ lineHeight: "20px",gap:'0px' }} direction="vertical">
              <Text
                style={{ margin: "0", fontSize: "14px", fontWeight: "600" }}
              >
                Village Creed
              </Text>
        {/* To do fixing space issue */}
{/*               <Text style={{ color: "#494A4E", fontSize: "12px" }}>
                11 members
              </Text> */}
            </Space>
          </Link>
          <DownOutlined
            style={{
              fontSize: "10px",
              color: "black",
              marginLeft: "1rem",
            }}
          />
        </Menu.Item>
        <Menu.Item style={{ marginLeft: "auto" }}>
          <Link to="/get-started">
            <b>Get started</b>
          </Link>
        </Menu.Item>
        <Menu.Item key="alipay">
          <Link to="/manage">
            <b>Manage</b>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <i class="ri-add-fill dashboard-header-icons"></i>
        </Menu.Item>
        <Menu.Item>
          <i class="ri-question-line dashboard-header-icons"></i>
        </Menu.Item>
        <Menu.Item>
          <i class="ri-notification-2-line dashboard-header-icons"></i>
        </Menu.Item>

        <Menu.Item>
          <span onClick={switchToPath}>
            <i class="ri-apps-line dashboard-header-icons"></i>
          </span>
        </Menu.Item>
        <Menu.Item>
          <Popover
            content={
              <span onClick={onLogout} style={{ cursor: "pointer" }}>
                Logout{" "}
              </span>
            }
            trigger="click"
            visible={visible}
            placement="bottom"
            onVisibleChange={handleVisibleChange}
          >
            <Avatar icon={<UserOutlined />} />
            <DownOutlined
              style={{
                fontSize: "10px",
                color: "black",
                marginRight: "1rem",
                marginLeft: ".5rem",
              }}
            />
          </Popover>
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default DashboardHeader;
