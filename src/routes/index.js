import Home from '../pages/Home';
import Categories from '../pages/Categories';
import Bookdetail from '../pages/Bookdetail';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Cart from '../pages/Cart';
import Notifi from '../pages/Notifi';
import ProfileLayout from '../components/Layout/ProfileLayout';
import Comment from '../pages/Comment';
import Order from '../pages/Order';
import Dashboard from '../pages/Admin/Dashboard/index';
import Orders from '../pages/Admin/Orders';
import Customers from '../pages/Admin/Customers';
import Products from '../pages/Admin/Products';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/categories', component: Categories },
    { path: '/bookdetail', component: Bookdetail },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile, layout: ProfileLayout },
    { path: '/cart', component: Cart },
    { path: '/notifi', component: Notifi, layout: ProfileLayout },
    { path: '/comment', component: Comment, layout: ProfileLayout },
    { path: '/order', component: Order, layout: ProfileLayout },
];

// prefix: /admin added in App.js
const privateRoutes = [
    { path: '/', component: Dashboard },
    { path: '/orders', component: Orders },
    { path: '/customers', component: Customers },
    { path: '/products', component: Products },
];

export { publicRoutes, privateRoutes };
