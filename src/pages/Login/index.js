import styles from './style.module.scss';
import classNames from 'classnames/bind';
import LoginItem from './LoginItem';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('form-wrap')}>
            <LoginItem/>
        </div>
    );
}

export default Login;
