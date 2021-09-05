import React from 'react';
import { Spin } from 'antd';
import store from './store/store';
// import { Button } from 'antd';
// import logo from './logo.svg';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import {getToken} from './utils/auth'
import Routers from './routes'
// import { connect } from 'react-redux'


import './App.css';

class App extends React.Component<any,any> {
  private token:any
  constructor(props:any) {
    super(props);
    this.state = {codeUrl: '',codeId:''};
    this.token = getToken()
  }
  
  itemRender=(props:any,item:any)=>{
    if(this.token) {
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
    console.log('app componentDidMount')
    store.subscribe(()=>{
      console.log('chnage:',store.getState().request.isLoading)
      this.setState({isLoading:store.getState().request.isLoading})
    })
  }
  render(){
    return (
      <div className="App">
        {
          
          this.state.isLoading?(<div style={{width:"100%",height:"100%",position:'fixed', display:'table',zIndex:1000, background:'#00000055',textAlign:'center'}}>
          <div style={{display:'table-cell', verticalAlign:'middle',marginLeft:'auto', marginRight:'auto'}}>
            <Spin tip="Loading...">
            </Spin>
          </div>
          </div>):""
        }
        <Router>
          <Switch>
            {
              Routers.map((item, index) => {
                console.log('path',item.path)
                 return <Route key={index} path={item.path} exact render={props =>this.itemRender(props,item)} />
            })}
          </Switch>
        </Router>
      </div>
    );
  }

}

export default App;
