import React from 'react';
import { Card, Button } from 'antd';
import {
  IndexModelState, ConnectProps, Loading, connect, useIntl,
} from 'umi';

import styles from './index.less';

interface PageProps extends ConnectProps {
  loading: boolean;
  index: IndexModelState;
}

const IndexPage: React.FC<PageProps> = ({ index, loading, dispatch }) => {
  const { message } = index;

  const intl = useIntl();
  const title = intl.formatMessage(
    {
      id: 'INDEX_WELCOME',
    },
    {
      message,
    },
  );

  const handleLoad = () => {
    if (dispatch) {
      dispatch({ type: 'index/load' });
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
  index: IndexModelState;
  loading: Loading;
}

export default connect(({ index, loading }: PageConnectProps) => ({
  index,
  loading: loading.models.index,
}))(IndexPage);
