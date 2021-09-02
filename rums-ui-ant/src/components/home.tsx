import React, { useState } from 'react';
import { Button, Descriptions, Result, Avatar, Space, Statistic } from 'antd';
import { LikeOutlined, UserOutlined } from '@ant-design/icons';

import type { ProSettings } from '@ant-design/pro-layout';
import ProLayout, { PageContainer, SettingDrawer } from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';
import '@ant-design/pro-layout/dist/layout.css';
import './home.css'

const content = (
  <Descriptions size="small" column={2}>
    <Descriptions.Item label="创建人">张三</Descriptions.Item>
    <Descriptions.Item label="联系方式">
    421421
    </Descriptions.Item>
    <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="更新时间">2017-10-10</Descriptions.Item>
    <Descriptions.Item label="备注">中国浙江省杭州市西湖区古翠路</Descriptions.Item>
  </Descriptions>
);

const Home= () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: true });
  const [pathname, setPathname] = useState('/welcome');
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...defaultProps}
        title='爱家后台管理系统'
        fixedHeader={true}
        logo="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ"
        location={{
          pathname,
        }}
        waterMarkProps={{
          content: '爱家',
        }}
        menuFooterRender={(props) => {
          return (
            <a
              style={{
                lineHeight: '48rpx',
                display: 'flex',
                height: 48,
                color: 'rgba(255, 255, 255, 0.65)',
                alignItems: 'center',
              }}
              href="https://preview.pro.ant.design/dashboard/analysis"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="pro-logo"
                src="https://procomponents.ant.design/favicon.ico"
                style={{
                  width: 16,
                  height: 16,
                  margin: '0 16px',
                  marginRight: 10,
                }}
              />
              {!props?.collapsed && '爱家后台管理系统'}
            </a>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
        {...settings}
      >
        <PageContainer
          content={content}
          tabList={[
            {
              tab: '基本信息',
              key: 'base',
            },
            {
              tab: '详细信息',
              key: 'info',
            },
          ]}
          extraContent={
            <Space size={24}>
              <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
              <Statistic title="Unmerged" value={93} suffix="/ 100" />
            </Space>
          }
          extra={[
            <Button key="3">操作</Button>,
            <Button key="2">操作</Button>,
            <Button key="1" type="primary">
              主操作
            </Button>,
          ]}
        >
          <div
            style={{
              height: '120vh',
            }}
          >
            <Result
              status="404"
              style={{
                height: '100%',
                background: '#fff',
              }}
              title="Hello World"
              subTitle="Sorry, you are not authorized to access this page."
              extra={<Button type="primary">Back Home</Button>}
            />
          </div>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => setSetting(changeSetting)}
        disableUrlParams
      />
    </div>
  );
};
export default Home;