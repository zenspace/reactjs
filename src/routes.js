import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';


const routes = [
  { path: '/', exact: true, name: 'Home', component: HomePage},
  { path: '/list', exact: true, name: 'List', component: ListPage},
];

export default routes;
