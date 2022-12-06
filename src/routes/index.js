import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Bookdetail from "../pages/Bookdetail";
import Login from "../pages/Login";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/categories', component: Categories },
    { path: '/bookdetail', component: Bookdetail },
    { path: '/login', component: Login }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };