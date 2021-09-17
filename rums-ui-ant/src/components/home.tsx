import React, { useState } from 'react';
import { Avatar,Button} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {Link } from 'react-router-dom';
import ProLayout, {  ProSettings,SettingDrawer,PageContainer } from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';
import {Route,Switch} from 'react-router-dom';
import '@ant-design/pro-layout/dist/layout.css';
import './home.css'
import Test from './Test';
// import User from '../pages/User/User'

const Home= (props:any) => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: true });
  const [pathname] = useState('/welcome');
  // const location:any = useLocation();
  // let { path, url } = useRouteMatch();
  console.log('Home',props)
  return (
    <div id="test-pro-layout" style={{height: '100vh',}}>
      <ProLayout
        {...defaultProps}
        title='爱家后台管理系统'
        fixedHeader={true}
        logo="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ"
        location={{
          pathname
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
        <PageContainer
          extra={[
            <Button key="3">操作</Button>,
            <Button key="2">操作</Button>,
            <Button key="1" type="primary">
              主操作
            </Button>,
          ]}
        >
          <Switch>
            <Route exact path='/test'>
              <Test></Test>
            </Route>
          </Switch>
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