import React from 'react';
import { Dropdown, Menu } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { LANGUAGES } from '@/constants';
import { getLocale, setLocale } from 'umi';

const SelectLang: React.FC<Props> = () => {
  const locale = getLocale();
  const languageMenus = (
    <Menu
      onClick={() => {
        const target = locale === 'zh-CN' ? 'en-US' : 'zh-CN';
        setLocale(target);
      }}
    >
      {LANGUAGES.map((lang) => (
        <Menu.Item key={lang.key}>
          <span>{lang.icon}</span>
          {lang.value}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={languageMenus}>
      <GlobalOutlined />
    </Dropdown>
  );
};

interface Props {}

export default SelectLang;
