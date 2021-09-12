import React, { useState } from 'react';
<<<<<<< HEAD
import { Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Link,Route,Switch, useRouteMatch } from 'react-router-dom';
=======
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Route,Switch} from 'react-router-dom';
>>>>>>> 61448c31e0eff6c6b60591461563bd0d77ec59a9
import type { ProSettings } from '@ant-design/pro-layout';
import ProLayout, {  SettingDrawer } from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';
import '@ant-design/pro-layout/dist/layout.css';
import './home.css'
import User from '../pages/User/User'


<<<<<<< HEAD
// import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';


=======
>>>>>>> 61448c31e0eff6c6b60591461563bd0d77ec59a9

const Home= () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: true });
  const [pathname] = useState('/welcome');
  const { path} = useRouteMatch()
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
          <Link to={item.path as string}>{dom}</Link>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
        {...settings}
      >
<<<<<<< HEAD
          <Switch>
              <Route exact path={`${path}/test`} component={() => <h3>嵌套路由</h3>}/>
          </Switch>
        {/* <PageContainer
          content={content}
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
        </PageContainer> */}
=======
        <PageContainer>
            <Switch>
              <Route key='/user' path='/user' component={User}/>
            </Switch>
        </PageContainer>
>>>>>>> 61448c31e0eff6c6b60591461563bd0d77ec59a9
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