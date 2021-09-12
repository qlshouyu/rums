import React from 'react';
import { Tabs,Input,Form, Button,Checkbox} from 'antd';
import "./index.css"
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import {getCodeImg,login} from '../../api/login'
import { encrypt } from '../../utils/encrypt';
// import store from '../../store/store'
import { connect } from 'react-redux'
import {loginAction} from '../../slices/currentUserSlice'
import { setToken } from '../../utils/auth';

const { TabPane } = Tabs;


class Login extends React.Component<any,any> {
  constructor(props:any) {
    super(props);
    this.state = {codeUrl: '',codeId:''};
  }
  
  getCode=()=> {
    const self=this
    getCodeImg().then(function(data){
      console.log('result:',data)
      self.setState({
        codeUrl: data.codeImg,
        codeId: data.id
      });
    })
  }
  onTabChange =()=>{
    console.log("tab chanage")
  }
  onRememberPwd=()=>{
    console.log("Remember pwd")
  }
  componentDidMount() {
    this.getCode()
  }
  onSubmit = (values:any) => {
    console.log('submit:', values);
    values.codeId=this.state.codeId
    values.pwd=encrypt(values.pwd)
    login(values).then(result=>{
      console.log('Login succefully:',result)
      this.props.login(result.user)
      setToken(result.token,true)
    })
    

  };
  layout = {
    labelCol: { span: 8 },
    sizetype: "large"
    
    // wrapperCol: { span: 16 }
  };
  render(){
    return <div className="login">
      <div className="login-box">
        <div className="left">
          <div className="title">欢迎进入『RUMS』后台管理系统</div>
        </div>
        <div className="right">
        <Tabs size="large" defaultActiveKey="1" onChange={this.onTabChange}>
          <TabPane tab="账户密码登录" key="1">
          <Form {...this.layout}
            name="basic"
            initialValues={{ remember: true }} 
            onFinish={this.onSubmit}
            >
              <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
                <Input size="large" placeholder="请输入账户" prefix={<UserOutlined />} />
              </Form.Item>
              <Form.Item name="pwd" rules={[{ required: true, message: '请输入密码!' }]}>
                <Input size="large" placeholder="请输入密码" prefix={<LockOutlined />} />
              </Form.Item>
              <img alt="验证码" src={this.state.codeUrl} onClick={this.getCode} />
              <Form.Item name="code" rules={[{ required: true, message: '请输入验证码!' }]}>
                <Input size="large" placeholder="请输入验证码" />
              </Form.Item>
              <Form.Item name="remember" valuePropName="checked" >
                <Checkbox>记住密码</Checkbox>
              </Form.Item>
              <Form.Item >
                <Button style={{width:"100%"}} size="large" type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
          </Form>
            
          </TabPane>
        </Tabs>
        </div>
      </div>
    </div>
  }
}

const mapStateToProps =(state:any)=> {
  return {isLoading:false}
}
const mapDispatchToProps =(dispatch:any)=> {
  return {
    login: (data:any) => dispatch(loginAction(data))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);