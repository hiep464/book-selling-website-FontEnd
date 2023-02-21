import styles from './menu.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <div className={cx('menu-block')}>
            <div className={cx('title-block', 'block-bottom')}>
                <h3>
                    <strong>TÀI KHOẢN</strong>
                </h3>
            </div>
            <div className={cx('content-block')}>
                <ul>
                    <li>
                        <Link to="/profile">
                            Thông tin tài khoản
                        </Link>
                    </li>
                    <li>
                        <Link to="/order">
                            Đơn hàng
                        </Link>
                    </li>
                    <li>
                        <Link to="/comment">
                            Nhận xét
                        </Link>
                    </li>
                    <li>
                        <Link to="/notifi">
                            Thông báo
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;
