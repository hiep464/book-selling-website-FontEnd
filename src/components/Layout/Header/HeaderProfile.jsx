import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faClipboardList, faCrown, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function HeaderProfile(props) {
    const attrs = props.attrs || {};
    const username = props.username;

    return (
        <div className={cx('account-logined')} tabIndex="-1" {...attrs}>
            <div className={cx('account-logined-wrapper')}>
                <Link to="/profile" style={{ textDecoration: 'none' }}>
                    <header className={cx('account-logined-header')}>
                        <div className={cx('header-left')}>
                            <FontAwesomeIcon className={cx('header-left-icon')} icon={faCrown} />
                            <div className={cx('header-left-info')}>
                                <h4>{username || ''}</h4>
                                <h5>Thành viên của h3.com</h5>
                            </div>
                        </div>
                        <FontAwesomeIcon className={cx('header-right')} icon={faCircleChevronRight} />
                    </header>
                </Link>
                <div
                    className={cx('account-logined-item-wrapper')}
                    onClick={props.onNavigateToOrder}
                    style={{ display: 'inline', width: '100%' }}
                >
                    <div className={cx('account-logined-item')}>
                        <FontAwesomeIcon className={cx('account-logined-item-icon')} icon={faClipboardList} />
                        <span>Đơn hàng của tôi</span>
                    </div>
                </div>
                <div
                    className={cx('account-logined-item-wrapper', 'no-border')}
                    onClick={props.onLogout}
                    style={{ display: 'inline', width: '100%' }}
                >
                    <div className={cx('account-logined-item')}>
                        <FontAwesomeIcon className={cx('account-logined-item-icon')} icon={faSignOut} />
                        <span>Thoát tài khoản</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

HeaderProfile.defaultProps = {
    attrs: [],
    username: 'Fake user',
    onLogout: null,
    onNavigateToOrder: null,
};

export default HeaderProfile;
