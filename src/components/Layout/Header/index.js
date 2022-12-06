import { useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faBell, faCartShopping, faList, faLock, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';
import LoginItem from '../../../pages/Login/LoginItem';

const cx = classNames.bind(styles);

function Header() {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <div className={cx('logo')}>
                        <span>H3.com</span>
                    </div>
                </Link>
                <div className={cx('menu')}>
                    <Link to="/categories">
                        <FontAwesomeIcon className={cx('menu-icon')} icon={faList} />
                    </Link>
                </div>

                <HeadlessTippy
                    visible={visible}
                    onClickOutside={hide}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <div className={cx('search-result1')}>
                                <FontAwesomeIcon icon={faArrowTrendUp}/>
                                Từ khóa Hot
                                <div className={cx('search-result1-menu')}>
                                    <div className={cx('search-result1-item')}>
    
                                    </div>
                                    <div className={cx('search-result1-item')}>
                                        
                                    </div>
                                    <div className={cx('search-result1-item')}>
                                        
                                    </div>
                                    <div className={cx('search-result1-item')}>
    
                                    </div>
                                    <div className={cx('search-result1-item')}>
                                        
                                    </div>
                                    <div className={cx('search-result1-item')}>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className={cx('search-result2')}>
                                <FontAwesomeIcon icon={faList}/>
                                Danh mục nổi bật
                                <div className={cx('search-result2-menu')}>
                                    <div className={cx('search-result2-item')}>
    
                                    </div>
                                    <div className={cx('search-result2-item')}>
                                        
                                    </div>
                                    <div className={cx('search-result2-item')}>
                                        
                                    </div>
                                    <div className={cx('search-result2-item')}>
    
                                    </div>
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
                        interactive
                        placement="bottom-end"
                        render={(attrs) => (
                            <div className={cx('notification-display')} tabIndex="-1" {...attrs}>
                                <div className={cx('notification-header')}>
                                    <FontAwesomeIcon icon={faBell}/>
                                    <span>Thông báo</span>
                                </div>
                                <div className={cx('notification-body')}>
                                    <FontAwesomeIcon className={cx('notification-body-icon')} icon={faLock}/>
                                    <span>Vui lòng đăng nhập để xem thông báo</span>
                                </div>
                                <div className={cx('notification-footer')}>
                                    <button className={cx('btn','btn-login')}>Login</button>
                                    <button className={cx('btn','btn-register')}>Regiter</button>
                                </div>
                            </div>
                        )}>
                        <div className={cx('notification', 'common')}>
                            <FontAwesomeIcon icon={faBell} />
                            <span>Thông báo</span>
                        </div>
                    </HeadlessTippy>
                    <div className={cx('cart', 'common')}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span>Giỏ hàng</span>
                    </div>

                    <HeadlessTippy
                        interactive
                        placement="bottom-end"
                        render={(attrs) => (
                            <div className={cx('account-btn')} tabIndex="-1" {...attrs}>
                                <button className={cx('btn','btn-login')}>Login</button>
                                <button className={cx('btn','btn-register')}>Regiter</button>
                            </div>
                        )}
                    >
                        <Link to="/login" style={{textDecoration : 'none'}}>
                            <div className={cx('account', 'common')}>
                                <FontAwesomeIcon icon={faUser} />
                                <span>Tài khoản</span>
                            </div>
                        </Link>
                    </HeadlessTippy>
                </div>
            </div>
            {/* hiển thị khi ấn vào nút login or register */}
            <div className={cx('form-wrap')}>
                <LoginItem/>
            </div>
        </header>
    );
}

export default Header;
