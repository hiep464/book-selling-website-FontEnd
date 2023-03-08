import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import AdminLayout from './components/Layout/AdminLayout/AdminLayout';
import GlobalStyles from './components/GlobalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthContextProvider } from './context/AuthContext';

const queryClient = new QueryClient();

function App() {
    return (
        <Router>
            <QueryClientProvider client={queryClient}>
                <AuthContextProvider>
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
                                        <Route
                                            key={'admin:' + index}
                                            path={'/admin' + route.path}
                                            element={<Page />}
                                        ></Route>
                                    );
                                })}
                            </Route>
                        </Routes>
                    </GlobalStyles>
                </AuthContextProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </Router>
    );
}

export default App;
