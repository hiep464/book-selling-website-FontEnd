import Home from '../pages/Home';
import Categories from '../pages/Categories';
import Bookdetail from '../pages/Bookdetail';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Cart from '../pages/Cart';
import Notifi from '../pages/Notifi';
import Dashboard from '../pages/Admin/Dashboard';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/categories', component: Categories },
    { path: '/bookdetail', component: Bookdetail },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile },
    { path: '/cart', component: Cart },
    { path: '/notifi', component: Notifi },
];

// prefix: /admin added in App.js
const privateRoutes = [
    { path: '/', component: Dashboard },
    { path: '/orders', component: Dashboard },
];

export { publicRoutes, privateRoutes };
