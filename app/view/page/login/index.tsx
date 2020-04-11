import React from 'react';
import {
  request, useModel, history, useIntl,
} from 'umi';
import {
  Form, Input, Checkbox, Button, Card, Row, Col,
} from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

export default () => {
  const { setInitialState, refresh } = useModel('@@initialState');

  const onFinish = async (values: any) => {
    const { data } = await request('/api/auth/verify', {
      method: 'POST',
      data: values,
    });

    const { member, access, token } = data;

    if (member) {
      // update
      if (values.remember) {
        window.localStorage.setItem('auth', JSON.stringify({ token, member, access }));
      }

      // redirect
      // history.push('/');

      // update state
      // setInitialState({
      //   token,
      //   member,
      //   access,
      // });

      refresh();
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const intl = useIntl();

  return (
    <PageHeaderWrapper title="登录" content="用户登录">
      <Card>
        <Row>
          <Col span={12} offset={6}>
            <Form
              name="basic"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label={intl.formatMessage({ id: 'FORM_EMAIL' })}
                name="email"
                rules={[
                  {
                    required: true,
                    message: intl.formatMessage({ id: 'FORM_EMAIL_MESSAGE' }),
                    type: 'email',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label={intl.formatMessage({ id: 'FORM_PASSWORD' })}
                name="password"
                rules={[
                  {
                    required: true,
                    message: intl.formatMessage({
                      id: 'FORM_PASSWORD_MESSAGE',
                    }),
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
    </PageHeaderWrapper>
  );
};
