import React from 'react';
import {
  Link, useIntl, getLocale, setLocale, history, useModel,
} from 'umi';
import {
  Avatar, Divider, Dropdown, Menu,
} from 'antd';
import { DefaultFooter } from '@ant-design/pro-layout';
import { GlobalOutlined } from '@ant-design/icons';

const RightRender = (initInfo: any) => {
  const intl = useIntl();
  const locale = getLocale();
  const { member } = initInfo;
  const { refresh } = useModel('@@initialState');

  // locale
  const languageMenu = (
    <Menu
      onClick={({ key }) => {
        if (!key) {
          return;
        }
        const target = locale === 'zh-CN' ? 'en-US' : 'zh-CN';
        setLocale(target);
      }}
    >
      <Menu.Item key="en-US">English</Menu.Item>
      <Menu.Item key="zh-CN">Chinese</Menu.Item>
    </Menu>
  );

  const LocaleNode = (
    <Dropdown overlay={languageMenu}>
      <GlobalOutlined />
    </Dropdown>
  );

  // auth
  const authMenu = (
    <Menu
      onClick={({ key }) => {
        if (key === 'logout') {
          window.localStorage.removeItem('auth');
          history.push('/');
          refresh();
        }
      }}
    >
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  const AuthNode = member ? (
    <Dropdown overlay={authMenu}>
      <Avatar src={member.avatar}>{member.email}</Avatar>
    </Dropdown>
  ) : (
    <Link to="/login">
      {intl.formatMessage({
        id: 'menu.login',
      })}
    </Link>
  );

  // render
  return (
    <div>
      {LocaleNode}
      <Divider type="vertical" />
      {AuthNode}
    </div>
  );
};

export default {
  rightRender: RightRender,
  logout: () => {},
  footerRender: () => <DefaultFooter links={false} copyright="Ergate.js" />,
};
