import React from 'react';
import { Menu } from 'antd';
import VillageHubLogo from '../../../assets/svg/logo-full.svg';

const Header = () => (
  <Menu mode="horizontal" className="Header-menu">
    <Menu.Item className="" key="paths">
    <img
      src={VillageHubLogo}
      alt="header logo"
    />
    </Menu.Item>
  </Menu>
);

export default Header;
