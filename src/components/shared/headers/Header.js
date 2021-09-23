import React from 'react';
import { Menu } from 'antd';
import VillageHubLogo from '../../../assets/svg/logo-full.svg';

const Header = () => (
  <Menu mode="horizontal" style={{paddingLeft: '1.5em',marginBottom: '-10px'}}>
    <Menu.Item className="" key="paths">
    <img
      src={VillageHubLogo}
      alt="header logo"
    />
    </Menu.Item>
  </Menu>
);

export default Header;
