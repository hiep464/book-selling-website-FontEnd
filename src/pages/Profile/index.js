import classNames from 'classnames/bind';
import styles from './profile.module.scss';

const cx = classNames.bind(styles);

function Profile({ children }) {
    return (
        <div className={cx('wrapper')}>
            <header>Thông tin tài khoản</header>
            <div className={cx('body')}>
                <form>
                    <div className={cx('item')}>
                        <span>Họ*</span>
                        <input type="text"></input>
                    </div>
                    <div className={cx('item')}>
                        <span>Tên*</span>
                        <input type="text"></input>
                    </div>
                    <div className={cx('item')}>
                        <span>Số điện thoại</span>
                        <input type="text"></input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;
