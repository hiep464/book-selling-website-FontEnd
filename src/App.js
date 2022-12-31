import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import AdminLayout from './components/Layout/AdminLayout/AdminLayout';
import GlobalStyles from './components/GlobalStyles';

function App() {
    return (
        <Router>
            <GlobalStyles>
                <Routes>
                    {/* User routes */}
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;
                        let ProfileLayout = route.layout;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        {!route.layout ? (
                                            <Page />
                                        ) : (
                                            <ProfileLayout>
                                                <Page />
                                            </ProfileLayout>
                                        )}
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}

                    {/* Admin route (start with /admin) */}
                    <Route path="/admin" element={<AdminLayout />}>
                        {privateRoutes.map((route, index) => {
                            const Page = route.component;

                            return (
                                <Route key={'admin:' + index} path={'/admin' + route.path} element={<Page />}></Route>
                            );
                        })}
                    </Route>
                </Routes>
            </GlobalStyles>
        </Router>
    );
}

export default App;
