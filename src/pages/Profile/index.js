import classNames from 'classnames/bind';
import styles from './profile.module.scss';

const cx = classNames.bind(styles);

function Profile({ children }) {
    return (
        <div className={cx('wrapper')}>
            profile
        </div>
    );
}

export default Profile;
