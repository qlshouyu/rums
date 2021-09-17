import Login from "./pages/login"
import Home from './components/home';
import Test from './components/Test';
// import {getUserMenus} from './api/login';

const routes = [
  {path: '/login',name:"登录", component: Login},
  {path: '/', name:"首页",  component: Home, auth: true
    ,childRoutes: [
      { path: 'test', component: Test }
    ]
  }
  
]
export default routes;


