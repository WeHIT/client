import Home from '../pages/home';
import Intro from '../pages/intro';
import Login from '../pages/login';
import salesPage from '../pages/salesPage';
import newsPage from '../pages/newsPage';
import setting from '../pages/setting';
import about from '../pages/about';
import user from '../pages/user';

const routeMap = {
  'intro': { name: 'intro', component: Intro, params: {} },
  'home': { name: 'home', component: Home, params: {} },
  'login': { name: 'login', component: Login, params: {} },
  'salesPage': { name: 'salesPage', component: salesPage, params: {}},
  'newsPage': { name: 'newsPage', component: newsPage, params: {}},
  'setting': { name: 'setting', component: setting, params: {}},
  'about': { name: 'about', component: about, params: {}},
  'user': { name: 'user', component: user, params: {}},
};

export default routeMap;
