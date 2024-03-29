import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, Divider, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from './theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

/*
 * @brief Admin sidebar
 *
 * Created on Fri Dec 30 2022
 * Copyright (c) 2022 HaVT
 */
// NOTE: add button to sidebar
const sidebarItems = [
    {
        type: 'item',
        title: 'Dashboard',
        to: '/admin',
        icon: HomeOutlinedIcon,
    },
    {
        type: 'text',
        title: 'Orders',
    },
    {
        type: 'item',
        title: 'Orders',
        to: '/admin/orders',
        icon: ListAltOutlinedIcon,
    },
    {
        type: 'text',
        title: 'Customers',
    },
    {
        type: 'item',
        title: 'Customers',
        to: '/admin/customers',
        icon: PeopleOutlinedIcon,
    },
    {
        type: 'text',
        title: 'Products',
    },
    {
        type: 'item',
        title: 'Products',
        to: '/admin/products',
        icon: MenuBookOutlinedIcon,
    },
    {
        type: 'text',
        title: 'LogOut',
    },
    {
        type: 'item',
        title: 'LogOut',
        to: '/',
        icon: LogoutOutlinedIcon,
    },
];

/**
 * Sidebar item
 */
const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

/**
 * Admin sidebar
 */
const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');

    return (
        <Box
            sx={{
                '& .pro-sidebar-inner': {
                    background: `${colors.primary[400]} !important`,
                },
                '& .pro-icon-wrapper': {
                    backgroundColor: 'transparent !important',
                },
                '& .pro-inner-item': {
                    padding: '5px 35px 5px 16px !important',
                },
                '& .pro-inner-item:hover': {
                    color: '#868dfb !important',
                },
                '& .pro-menu-item.active': {
                    color: '#6870fa !important',
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: '10px 0 20px 0',
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMIN
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center"></Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: '10px 0 0 0' }}
                                >
                                    Title
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    ...
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* Render sidebar items */}
                    <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                        {sidebarItems.map((item) => {
                            switch (item.type) {
                                case 'text':
                                    return isCollapsed ? (
                                        <Divider key={item.title} />
                                    ) : (
                                        <Typography
                                            key={item.title}
                                            // variant="h5"
                                            color={colors.grey[300]}
                                            sx={{
                                                m: '15px 0 5px 20px',
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                    );
                                case 'item':
                                    return (
                                        <Item
                                            key={item.title + item.type}
                                            title={item.title}
                                            to={item.to}
                                            icon={<item.icon />}
                                            selected={selected}
                                            setSelected={setSelected}
                                        />
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
