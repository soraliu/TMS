import PropTypes from 'prop-types';
import { useState } from 'react';
import { Layout } from 'antd';

import GlobalHeader from '../components/GlobalHeader';
import GlobalBreadcrumb from '../components/GlobalBreadcrumb';
import SiderMenu from '../components/GlobalSiderMenu/SiderMenu';

import { getMenuData } from '../config/menu';
import logo from '../assets/logo.svg';
import logoCollapsed from '../assets/logo-collapsed.svg';


const { Content, Header } = Layout;

const GlobalLayout = ({
  children,
  location,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const handleMenuCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <SiderMenu
        logo={logo}
        logoCollapsed={logoCollapsed}
        collapsed={collapsed}
        menuData={getMenuData()}
        location={location}
        onCollapse={handleMenuCollapse}
      />
      <Layout>
        <Header style={{ padding: 0 }}>
          <GlobalHeader
            collapsed={collapsed}
            onCollapse={handleMenuCollapse}
          />
        </Header>
        <GlobalBreadcrumb />
        <Content style={{ margin: '24px 24px 0', height: '100%' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

GlobalLayout.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

export default GlobalLayout;
