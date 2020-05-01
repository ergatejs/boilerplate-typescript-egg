import React from 'react';
import { Divider } from 'antd';
import { DefaultFooter } from '@ant-design/pro-layout';

import AuthInfo from '@/component/AuthInfo';
import SelectLang from '@/component/SelectLang';

const RightRender = (initInfo: any) => {
  const { member } = initInfo;
  return (
    <div>
      <SelectLang />
      <Divider type="vertical" />
      <AuthInfo member={member} />
    </div>
  );
};

export default {
  rightRender: RightRender,
  logout: () => {},
  footerRender: () => <DefaultFooter links={false} copyright="Ergate.js" />,
};
