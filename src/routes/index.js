import Home from "../pages/Home";
import Categories from "../pages/Categories";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/categories', component: Categories }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };