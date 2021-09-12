import Login from "./pages/login"
import Home from './components/home';
// import {getUserMenus} from './api/login';

const routes = [
  {path: '/home', name:"首页",  component: Home, auth: true},
  {path: '/login',name:"登录", component: Login}
]
export default routes;
