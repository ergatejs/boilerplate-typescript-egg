import React from 'react';
import {
  Link, useIntl, history, useModel,
} from 'umi';
import { Dropdown, Menu, Avatar } from 'antd';

const AuthInfo: React.FC<Props> = (props) => {
  const intl = useIntl();
  const { member } = props;
  const { refresh } = useModel('@@initialState');

  const onChange = ({ key }: MenuProps) => {
    if (key === 'logout') {
      window.localStorage.removeItem('auth');
      history.push('/');
      refresh();
    }
  };

  const authMenu = (
    <Menu onClick={onChange}>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  if (member) {
    return (
      <Dropdown overlay={authMenu}>
        <Avatar src={member.avatar}>{member.email}</Avatar>
      </Dropdown>
    );
  }

  const loginText = intl.formatMessage({ id: 'menu.login' });

  return (
    <Link to="/login">{loginText}</Link>
  );
};

export default AuthInfo;

interface Props {
  member: any;
}

interface MenuProps {
  key: string;
}
