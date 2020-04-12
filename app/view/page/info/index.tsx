import React from 'react';
import { Card, Button } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import {
  ConnectProps, Loading, connect,
} from 'umi';
import { InfoModelState } from './model';

interface PageProps extends ConnectProps {
  loading: boolean;
  info: InfoModelState;
}

const InfoPage: React.FC<PageProps> = ({ info, loading, dispatch }) => {
  const { docs } = info;

  const handleLoad = () => {
    if (dispatch) {
      dispatch({ type: 'info/load' });
    }
  };

  return (
    <PageHeaderWrapper content="春暖花开">
      <Card loading={loading}>
        {JSON.stringify(docs)}

        <Button onClick={handleLoad}>Load</Button>
      </Card>
    </PageHeaderWrapper>
  );
};

interface PageConnectProps {
  info: InfoModelState;
  loading: Loading;
}

export default connect(({ info, loading }: PageConnectProps) => ({
  info,
  loading: loading.models.info,
}))(InfoPage);
