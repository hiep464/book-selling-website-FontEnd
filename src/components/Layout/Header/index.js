import { Fragment, useCallback, useContext, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowTrendUp,
    faBell,
    faCartShopping,
    faCircleChevronRight,
    faClipboardList,
    faCrown,
    faList,
    faLock,
    faSearch,
    faSignOut,
    faUser,
    faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';
import LoginItem from '../../../pages/Login/LoginItem';
import HeaderProfile from './HeaderProfile';
import HeaderRegister from './HeaderRegister';
import { AuthContext } from '../../../context/AuthContext';

const cx = classNames.bind(styles);

function Header() {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const [disable, setDisable] = useState(false);
    const addDisable = () => setDisable(true);
    const remoteDisable = () => setDisable(false);

    const { state, logout } = useContext(AuthContext);
    const { isLogin, username } = state;

    const navigate = useNavigate();
    const handleNavigateToOrder = useCallback(
        (e) => {
            navigate('/order');
        },
        [navigate],
    );

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/" style={{ textDecoration: 'none' }} onClick={remoteDisable}>
                    <div className={cx('logo')}>
                        <span>H3.com</span>
                    </div>
                </Link>
                <div className={cx('menu')}>
                    <Link to="/categories" onClick={remoteDisable}>
                        <FontAwesomeIcon className={cx('menu-icon')} icon={faList} />
                    </Link>
                </div>

                <HeadlessTippy
                    visible={visible}
                    onClickOutside={hide}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <div className={cx('search-result1')}>
                                <FontAwesomeIcon icon={faArrowTrendUp} className={cx('search-result-icon')} />
                                <span>Từ khóa Hot</span>
                                <div className={cx('search-result1-menu')}>
                                    <div className={cx('search-result1-item')}></div>
                                    <div className={cx('search-result1-item')}></div>
                                    <div className={cx('search-result1-item')}></div>
                                    <div className={cx('search-result1-item')}></div>
                                    <div className={cx('search-result1-item')}></div>
                                    <div className={cx('search-result1-item')}></div>
                                </div>
                            </div>
                            <div className={cx('search-result2')}>
                                <FontAwesomeIcon icon={faList} className={cx('search-result-icon')} />
                                <span>Danh mục nổi bật</span>
                                <div className={cx('search-result2-menu')}>
                                    <div className={cx('search-result2-item')}></div>
                                    <div className={cx('search-result2-item')}></div>
                                    <div className={cx('search-result2-item')}></div>
                                    <div className={cx('search-result2-item')}></div>
                                </div>
                            </div>
                        </div>
                    )}
                >
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
                </HeadlessTippy>

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
                        <div className={cx('notification', 'common')}>
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
                                <div className={cx('cart', 'common')}>
                                    <FontAwesomeIcon className={cx('icon-size')} icon={faCartShopping} />
                                    <span>Giỏ hàng</span>
                                </div>
                            </HeadlessTippy>
                        ) : (
                            <Link to="/cart" style={{ textDecoration: 'none' }}>
                                <div className={cx('cart', 'common')}>
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
                                <HeaderRegister attrs={attrs} />
                            )
                        }
                    >
                        <div className={cx('account', 'common', 'no-margin-right')}>
                            {isLogin ? (
                                <Fragment>
                                    <FontAwesomeIcon className={cx('icon-size')} icon={faUserGraduate} />
                                    <span>User</span>
                                </Fragment>
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
