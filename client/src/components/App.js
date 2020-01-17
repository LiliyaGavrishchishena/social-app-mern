import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const App = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Business</Menu.Item>
          <Menu.Item key="2">Features</Menu.Item>
          <Menu.Item key="3">Pricing</Menu.Item>
          <Menu.Item key="4">About Us</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  User Menu
                </span>
              }
            >
              <Menu.Item key="1">Profile</Menu.Item>
              <Menu.Item key="2">Rating</Menu.Item>
              <Menu.Item key="3">Your tasks</Menu.Item>
              <Menu.Item key="4">Calendar</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  Collegues
                </span>
              }
            >
              <Menu.Item key="5">List</Menu.Item>
              <Menu.Item key="6">Achieves</Menu.Item>
              <Menu.Item key="7">Skills</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="notification" />
                  Settings
                </span>
              }
            >
              <Menu.Item key="9">Information</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
