import Home from '../pages/home';
import Intro from '../pages/intro';

const routeMap = {
  'intro': {name: 'intro', component: Intro, params: {}},
  'home': {name: 'home', component: Home, params: {}}
}

export default routeMap;