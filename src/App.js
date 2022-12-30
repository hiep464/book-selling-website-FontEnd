import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import AdminLayout from './components/Layout/AdminLayout/AdminLayout';

function App() {
    return (
        <Router>
            <Routes>
                {/* User routes */}
                {publicRoutes.map((route, index) => {
                    const Page = route.component;

                    let Layout = DefaultLayout;

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <div className="App">
                                    <Layout>
                                        <Page />
                                    </Layout>
                                </div>
                            }
                        ></Route>
                    );
                })}

                {/* Admin route (start with /admin) */}
                <Route path="/admin" element={<AdminLayout />}>
                    {privateRoutes.map((route, index) => {
                        const Page = route.component;

                        return <Route key={'admin:' + index} path={'/admin' + route.path} element={<Page />}></Route>;
                    })}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
