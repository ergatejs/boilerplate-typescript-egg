import React from 'react';
import { Card, Col, Row } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less';

const CARDS = [
  {
    title: 'Node.js',
  },
  {
    title: 'TypeScript',
  },
  {
    title: 'Egg.js',
  },
  {
    title: 'Umi.js',
  },
  {
    title: 'Ant.design',
  },
  {
    title: 'Hausura',
  },
];

export default () => (
  <PageHeaderWrapper content="欢迎使用">
    <Row gutter={16}>
      {CARDS.map((item, index) => (
        <Col span={8} key={index}>
          <Card title={item.title} bordered={false} className={styles.card}>
            {item.title}
          </Card>
        </Col>
      ))}
    </Row>
  </PageHeaderWrapper>
);
