import React from 'react';
import Sidebar from './Sidebar';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import Topbar from './Topbar';
import styles from './admin.scss';
import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';

const cx = classNames.bind(styles);

/**
 * Apply admin layout
 */
const AdminLayout = () => {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className={cx('admin-app')}>
                    <Sidebar />
                    <main className={cx('admin-content')}>
                        <Topbar />
                        {/* child component */}
                        <Outlet />
                        {/* child component */}
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default AdminLayout;
