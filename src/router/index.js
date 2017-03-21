import Home from '../pages/home';
import Intro from '../pages/intro';
import Login from '../pages/login';

const routeMap = {
  'intro': { name: 'intro', component: Intro, params: {} },
  'home': { name: 'home', component: Home, params: {} },
  'login': { name: 'login', component: Login, params: {} },
}

export default routeMap;