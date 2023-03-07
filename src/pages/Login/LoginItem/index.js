import { useContext, useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import { useLogin } from '../../../api/useAuth';
import { redirect, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

const cx = classNames.bind(styles);

function LoginItem(data) {
    const [active, setActive] = useState(data.data);
    const addActive = () => setActive(true);
    const remoteActive = () => setActive(false);
    console.log(data.data);

    const [forget, setForget] = useState(false);
    const addForget = () => setForget(true);
    const remoteFroget = () => setForget(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { state } = useContext(AuthContext);
    const { mutate: login, data: loginData } = useLogin({
        onSuccess: () => {
            if (state['isLogin']) {
                navigate('/');
            }
        },
    });
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (active === true && forget === false) {
            login({ email, password });
        }
    };

    return (
        <div className={cx('form')}>
            {forget ? (
                <header className={cx('form-header-forget')}>Khôi phục mật khẩu</header>
            ) : (
                <header className={cx('form-header')}>
                    <button className={cx('form-header-register', active ? 'active' : '')} onClick={addActive}>
                        Đăng nhập
                    </button>
                    <button className={cx('form-header-login', active ? '' : 'active')} onClick={remoteActive}>
                        Đăng ký
                    </button>
                </header>
            )}
            <div className={cx('register')}>
                <form className={cx('register-form')}>
                    <div className={cx('account')}>
                        <h4>Tài khoản :</h4>
                        <input
                            type="text"
                            className={cx('phone-email')}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className={cx('pass')}>
                        <h4>{forget ? 'Mật khẩu mới :' : 'Mật khẩu:'}</h4>
                        <input
                            type="password"
                            className={cx('password')}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    {active ? (
                        ''
                    ) : (
                        <div className={cx('pass-check')}>
                            <h4>{forget ? 'Xác nhận mật khẩu mới :' : 'Xác nhận mật khẩu :'}</h4>
                            <input type="password" className={cx('password')} />
                        </div>
                    )}
                    {forget ? (
                        <div className={cx('newpass-check')}>
                            <h4>Xác nhận mật khẩu :</h4>
                            <input type="password" className={cx('password')} />
                        </div>
                    ) : (
                        ''
                    )}
                </form>
                {active === true && forget === false ? <button onClick={addForget}>Quên mật khẩu?</button> : ''}
                <div className={cx('register-btn')}>
                    <button onClick={handleSubmit}>{forget ? 'Xác nhận' : active ? 'Đăng nhập' : 'Đăng ký'}</button>
                    {forget ? <button onClick={remoteFroget}>Quay lại</button> : ''}
                </div>
            </div>
        </div>
    );
}

export default LoginItem;
