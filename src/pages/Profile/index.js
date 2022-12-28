import Menu from './Menu';
import classNames from 'classnames/bind';
import styles from './profile.module.scss';

const cx = classNames.bind(styles);

function Profile({ children }) {
    return (
        <div>
            <Menu />
            <div className={cx('container-wrap')}>
                <div className={cx('container')}>{children}</div>
            </div>
        </div>
    );
}

export default Profile;
