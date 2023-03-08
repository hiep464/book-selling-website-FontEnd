import { Fragment, useCallback, useContext, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowTrendUp,
    faBell,
    faCartShopping,
    faList,
    faLock,
    faSearch,
    faUser,
    faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import LoginItem from '../../../pages/Login/LoginItem';
import HeaderProfile from './HeaderProfile';
import HeaderRegister from './HeaderRegister';
import { AuthContext } from '../../../context/AuthContext';

const cx = classNames.bind(styles);
function Header() {
    let user = false;
    const data = useLocation();
    if (data.state) {
        user = data.state.user;
    }

    const { state, logout } = useContext(AuthContext);

    if (state['isLogin']) user = true;
    // console.log(data);
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const [disable, setDisable] = useState(false);
    // const addDisable = () => setDisable(true);
    const remoteDisable = () => setDisable(false);
    // const navigate = useNavigate();
    // const {mutate: logout} = useLogout();

    const { isLogin, username } = state;

    const navigate = useNavigate();
    const handleNavigateToOrder = useCallback(
        (e) => {
            navigate('/order');
        },
        [navigate],
    );

    // const handleLogout = () => {
    //     logout();
    //     navigate('/');
    // };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/" style={{ color: '#c92127' }} onClick={remoteDisable}>
                    <div className={cx('logo')}>
                        <img
                            className={cx('logo-img')}
                            src={require('../../../assets/images/bookIcon.png')}
                            alt=""
                        ></img>
                        <span> H3 Book Store</span>
                    </div>
                </Link>
                <div className={cx('menu')}>
                    <Link to="/categories" onClick={remoteDisable}>
                        <FontAwesomeIcon className={cx('menu-icon')} icon={faList} />
                    </Link>
                </div>

                <div className={cx('search')}>
                    <input
                        className={cx('search-input')}
                        placeholder="Tim kiếm sản phẩm mong muốn..."
                        onClick={show}
                    ></input>
                    <button>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>

                <div className={cx('action')}>
                    <HeadlessTippy
                        interactive={true}
                        placement="bottom-end"
                        // visible
                        render={(attrs) =>
                            isLogin ? (
                                <div className={cx('notification-display-user')} tabIndex="-1" {...attrs}>
                                    <header className={cx('notification-display-user-header')}>
                                        <div className={cx('user-header-right')}>
                                            <FontAwesomeIcon className={cx('user-header-right-icon')} icon={faBell} />
                                            <h5>Thông báo</h5>
                                        </div>
                                        <Link to="/notifi" style={{ textDecoration: 'none' }}>
                                            <span>Xem tất cả</span>
                                        </Link>
                                    </header>
                                    <div className={cx('notification-display-user-body')}>
                                        <div className={cx('notification-body')}>
                                            <FontAwesomeIcon className={cx('notification-body-icon')} icon={faLock} />
                                            <span>Chưa có sản phẩm</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className={cx('notification-display')} tabIndex="-1" {...attrs}>
                                    <div className={cx('notification-header')}>
                                        <FontAwesomeIcon icon={faBell} />
                                        <span>Thông báo</span>
                                    </div>
                                    <div className={cx('notification-body')}>
                                        <FontAwesomeIcon className={cx('notification-body-icon')} icon={faLock} />
                                        <span>Vui lòng đăng nhập để xem thông báo</span>
                                    </div>
                                </div>
                            )
                        }
                    >
                        <div className={cx('notification', 'common-header')}>
                            <FontAwesomeIcon className={cx('icon-size')} icon={faBell} />
                            <span>Thông báo</span>
                        </div>
                    </HeadlessTippy>
                    <HeadlessTippy
                        interactive={true}
                        placement="bottom-end"
                        // visible
                        render={(attrs) => <div></div>}
                    >
                        {!isLogin ? (
                            <HeadlessTippy
                                interactive={true}
                                placement="bottom-end"
                                // visible
                                render={(attrs) => (
                                    <div className={cx('cart-guest')}>
                                        <FontAwesomeIcon className={cx('cart-guest-icon')} icon={faCartShopping} />
                                        <span>Chưa có sản phẩm</span>
                                    </div>
                                )}
                            >
                                <div className={cx('cart', 'common-header')}>
                                    <FontAwesomeIcon className={cx('icon-size')} icon={faCartShopping} />
                                    <span>Giỏ hàng</span>
                                </div>
                            </HeadlessTippy>
                        ) : (
                            <Link to="/cart" style={{ textDecoration: 'none' }}>
                                <div className={cx('cart', 'common-header')}>
                                    <FontAwesomeIcon className={cx('icon-size')} icon={faCartShopping} />
                                    <span>Giỏ hàng</span>
                                </div>
                            </Link>
                        )}
                    </HeadlessTippy>

                    <HeadlessTippy
                        interactive
                        placement="bottom-end"
                        // visible
                        render={(attrs) =>
                            isLogin ? (
                                <HeaderProfile
                                    attrs={attrs}
                                    username={username}
                                    onLogout={(e) => {
                                        e.preventDefault();
                                        console.log('logout');
                                        logout();
                                        navigate('/');
                                    }}
                                    onNavigateToOrder={handleNavigateToOrder}
                                />
                            ) : (
                                // =======
                                //                             user ? (
                                //                                 <div className={cx('account-logined')} tabIndex="-1" {...attrs}>
                                //                                     <div className={cx('account-logined-wrapper')}>
                                //                                         <Link to="/profile" style={{ textDecoration: 'none' }}>
                                //                                             <header className={cx('account-logined-header')}>
                                //                                                 <div className={cx('header-left')}>
                                //                                                     <FontAwesomeIcon
                                //                                                         className={cx('header-left-icon')}
                                //                                                         icon={faCrown}
                                //                                                     />
                                //                                                     <div className={cx('header-left-info')}>
                                //                                                         <h4>User name</h4>
                                //                                                         <h5>Thành viên của h3.com</h5>
                                //                                                     </div>
                                //                                                 </div>
                                //                                                 <FontAwesomeIcon
                                //                                                     className={cx('header-right')}
                                //                                                     icon={faCircleChevronRight}
                                //                                                 />
                                //                                             </header>
                                //                                         </Link>
                                //                                         <div className={cx('account-logined-item-wrapper')}>
                                //                                             <div className={cx('account-logined-item')}>
                                //                                                 <FontAwesomeIcon
                                //                                                     className={cx('account-logined-item-icon')}
                                //                                                     icon={faClipboardList}
                                //                                                 />
                                //                                                 <span>Đơn hàng của tôi</span>
                                //                                             </div>
                                //                                         </div>
                                //                                         <div className={cx('account-logined-item-wrapper', 'no-border')}>
                                //                                             <button className={cx('account-logined-item')} onClick={handleLogout}>
                                //                                                 <FontAwesomeIcon
                                //                                                     className={cx('account-logined-item-icon')}
                                //                                                     icon={faSignOut}
                                //                                                 />
                                //                                                 <span>Thoát tài khoản</span>
                                //                                             </button>
                                //                                         </div>
                                //                                     </div>
                                //                                 </div>
                                // >>>>>>> feature/register-cart-feedback
                                <HeaderRegister attrs={attrs} />
                            )
                        }
                    >
                        <div className={cx('account', 'common', 'no-margin-right')}>
                            {isLogin ? (
                                <Link
                                    to="/profile"
                                    style={{
                                        textDecoration: 'none',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                        color: '#7a7e7f',
                                    }}
                                >
                                    <FontAwesomeIcon className={cx('icon-size')} icon={faUserGraduate} />
                                    <span>User</span>
                                </Link>
                            ) : (
                                <Link
                                    to="/login"
                                    style={{
                                        textDecoration: 'none',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                        color: '#7a7e7f',
                                    }}
                                >
                                    <Fragment>
                                        <FontAwesomeIcon className={cx('icon-size')} icon={faUser} />
                                        <span>Tài khoản</span>
                                    </Fragment>
                                </Link>
                            )}
                        </div>
                    </HeadlessTippy>
                </div>
            </div>
            {/* hiển thị khi ấn vào nút login or register */}
            <div className={cx('form-wrap')}>
                <LoginItem />
            </div>
        </header>
    );
}

export default Header;
