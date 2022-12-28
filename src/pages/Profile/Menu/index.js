import styles from './menu.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu() {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const [disable, setDisable] = useState(false);
    const addDisable = () => setDisable(true);
    const remoteDisable = () => setDisable(false);
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
                        <Link to="/profile/detail" onClick={remoteDisable}>
                            Thông tin tài khoản
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile/address" onClick={remoteDisable}>
                            Số địa chỉ
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile/order-list" onClick={remoteDisable}>
                            Đơn hàng của tôi
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile/review" onClick={remoteDisable}>
                            Nhận xét của tôi
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;
