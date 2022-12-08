import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Bookdetail from "../pages/Bookdetail";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";
import Notifi from "../pages/Notifi";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/categories', component: Categories },
    { path: '/bookdetail', component: Bookdetail },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile },
    { path: '/cart', component: Cart },
    { path: '/notifi', component: Notifi }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };