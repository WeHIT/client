import Home from '../pages/home';
import Intro from '../pages/intro';
import Login from '../pages/login';
import salesPage from '../pages/salesPage';
import newsPage from '../pages/newsPage';

const routeMap = {
  'intro': { name: 'intro', component: Intro, params: {} },
  'home': { name: 'home', component: Home, params: {} },
  'login': { name: 'login', component: Login, params: {} },
  'salesPage': { name: 'salesPage', component: salesPage, params: {}},
  'newsPage': { name: 'newsPage', component: newsPage, params: {}},
}

export default routeMap;
