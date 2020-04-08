import React from 'react';
import { Card, Button } from 'antd';
import { ConnectProps, Loading, connect, useIntl } from 'umi';
import { InfoModelState } from './model';

import styles from './index.less';

interface PageProps extends ConnectProps {
  loading: boolean;
  info: InfoModelState;
}

const InfoPage: React.FC<PageProps> = ({ info, loading, dispatch }) => {
  const { message } = info;

  const intl = useIntl();
  const title = intl.formatMessage(
    {
      id: 'INFO_WELCOME',
    },
    {
      message,
    },
  );

  const handleLoad = () => {
    if (dispatch) {
      dispatch({ type: 'info/load' });
    }
  };

  return (
    <Card loading={loading}>
      <h1 className={styles.title}>{title}</h1>
      <Button onClick={handleLoad}>Load</Button>
    </Card>
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