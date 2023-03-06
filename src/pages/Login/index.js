import styles from './style.module.scss';
import classNames from 'classnames/bind';
import LoginItem from './LoginItem';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const cx = classNames.bind(styles);

function Login() {
    const data = useLocation();
    console.log(data);
    let login;
    if (data.state) {
        login = data.state.login;
    } else {
        login = true;
    }
    return (
        <div className={cx('form-wrap')}>
            <LoginItem data={login} />
        </div>
    );
}

export default Login;
