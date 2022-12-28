import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Bookdetail from "../pages/Bookdetail";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";
import Notifi from "../pages/Notifi";
import Account from "../pages/Profile/Account";
import Address from "../pages/Profile/Address";
import OrderList from "../pages/Profile/OrderList";
import Review from "../pages/Profile/Review";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/categories', component: Categories },
    { path: '/bookdetail', component: Bookdetail },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile },
    { path: '/cart', component: Cart },
    { path: '/notifi', component: Notifi },
    { path: '/profile/detail', component: Account },
    { path: '/profile/address', component: Address },
    { path: '/profile/order-list', component: OrderList },
    { path: '/profile/review', component: Review },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };