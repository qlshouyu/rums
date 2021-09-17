import React from 'react';
import { Spin } from 'antd';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import {getToken} from './utils/auth'
import Routers from './routes'
import { connect } from 'react-redux'
import {getUserMenus} from './api/login'


import './App.css';
import Login from './pages/login';
import Home from './components/home';
// import Login from './pages/login';

class App extends React.Component<any,any> {
  private token:any
  constructor(props:any) {
    super(props);
    this.state = {codeUrl: '',codeId:''};
    
  }
  getMenus=()=>{
    getUserMenus().then(function(data){
      console.log('menus:',data)
    })
    
  }
  itemRender=(props:any,item:any)=>{
    if(this.props.currentUser) {
      console.log("have token")
      if(item.path==='/login'){
        return <Redirect to={{pathname: '/',state: { from: props.location }}} />
      }else{
        return <item.component {...props} />
      }
    }else {
      if(!item.auth) {
        return <item.component {...props} />
      }else{
        return <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      }
    }
  }
  componentDidMount() {
    this.token = getToken()
    // 说明已经登录获取菜单
    // if(this.token) {
    //   console.log('Had logined')
    //   this.getMenus()
    // }
  }
  render(){
    console.log('pppp==',this.props)
    return (
      <div className="App">
        {
          
          this.props.isLoading?(<div style={{width:"100%",height:"100%",position:'fixed', display:'table',zIndex:1000, background:'#00000055',textAlign:'center'}}>
          <div style={{display:'table-cell', verticalAlign:'middle',marginLeft:'auto', marginRight:'auto'}}>
            <Spin tip="Loading...">
            </Spin>
          </div>
          </div>):""
        }
        <Router >
          <Switch>
          {
            // Routers.map((item, index) => {
            //   console.log('path',item.path)
            //   return <Route 
            //   key={index} 
            //   path={item.path}
            //   exact={item.path==='/login'?true:false}
            //   render={props =>this.itemRender(props,item)} >
            //   </Route>
            // })
          }
            <Route exact path='/' render={props =>this.itemRender(props,item)} />
            <Route path='/login'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

}

const mapStateTopProps =(state:any)=> {
  return {isLoading:state.request.isLoading,currentUser:state.currentUser.currentUser}
}

export default connect(mapStateTopProps)(App);
