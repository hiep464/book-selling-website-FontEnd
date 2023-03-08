import { useContext, useState } from 'react';
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import { useLogin, useRegister } from '../../../api/useAuth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import ReactLoading from 'react-loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function LoginItem(data) {
    const [active, setActive] = useState(data.data);
    const addActive = () => setActive(true);
    const remoteActive = () => setActive(false);

    const [forget, setForget] = useState(false);
    const addForget = () => setForget(true);
    const remoteFroget = () => setForget(false);

    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [confirmPasswordErr, setConfirmPasswordErr] = useState('');
    const handleValidationPass = () => {
        //for password
        const uppercaseRegExp = /(?=.*?[A-Z])/;
        const lowercaseRegExp = /(?=.*?[a-z])/;
        const digitsRegExp = /(?=.*?[0-9])/;
        const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
        const minLengthRegExp = /.{8,}/;
        const passwordLength = password.length;
        const uppercasePassword = uppercaseRegExp.test(password);
        const lowercasePassword = lowercaseRegExp.test(password);
        const digitsPassword = digitsRegExp.test(password);
        const specialCharPassword = specialCharRegExp.test(password);
        const minLengthPassword = minLengthRegExp.test(password);
        let errMsg = '';
        if (passwordLength === 0) {
            errMsg = 'Password is empty';
        } else if (!uppercasePassword) {
            errMsg = 'At least one Uppercase';
        } else if (!lowercasePassword) {
            errMsg = 'At least one Lowercase';
        } else if (!digitsPassword) {
            errMsg = 'At least one digit';
        } else if (!specialCharPassword) {
            errMsg = 'At least one Special Characters';
        } else if (!minLengthPassword) {
            errMsg = 'At least minumum 8 characters';
        } else {
            errMsg = '';
        }
        setPasswordErr(errMsg);
    };

    const handleValidationPassConfirm = () => {
        if (!(passwordConfirm === password)) {
            setConfirmPasswordErr('Confirm password is not matched');
        } else {
            setConfirmPasswordErr('');
        }
    };

    const navigate = useNavigate();
    const { state } = useContext(AuthContext);
    const { mutate: login, data: loginData } = useLogin({
        onSuccess: () => {
            // if (state['isLogin']) {
            navigate('/');
            setLoading(false);
            // }
        },
        onError: () => {
            setLoading(false);
            setErr(true);
        }
    });
    const { mutate: register } = useRegister({
        onSuccess: () => {
            // if (state['isLogin']) {
            navigate('/');
            setLoading(false);
            // }
        },
        onError: () => {
            setLoading(false);
            setErr(true);
        }
    });

    const handleSubmit = () => {
        if (active === true && forget === false) {
            setLoading(true);
            login({ email, password });
        } else if (active === false && forget === false) {
            setLoading(true);
            register({ email, password });
        }
    };

    return (
        <div className={cx('form')}>
            {loading ? (
                <div className={cx('loading')}>
                    <ReactLoading type={'spinningBubbles'} color={'#0288d1'} />
                </div>
            ) : (
                ''
            )}
            {err ? (
                <div className={cx('noti-err-wrapper')}>
                    <div className={cx('noti-err')}>
                        <div className={cx('noti-err-header')}>
                            <FontAwesomeIcon icon={faBell} className={cx('noti-err-header-icon')}/>
                            <span>Error</span>
                        </div>
                        <button className={cx('noti-err-header-btn')} onClick={() => setErr(false)}>OK</button>
                    </div>
                </div>
            ) : ''
            }
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
                            onKeyUp={!active ? handleValidationPass : () => {}}
                        />
                        {!active ? <p style={{ color: 'red' }}>{forget ? '' : passwordErr}</p> : ''}
                    </div>
                    {active ? (
                        ''
                    ) : (
                        <div className={cx('pass-check')}>
                            <h4>{forget ? 'Xác nhận mật khẩu mới :' : 'Xác nhận mật khẩu :'}</h4>
                            <input
                                type="password"
                                className={cx('password')}
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                                onKeyUp={handleValidationPassConfirm}
                            />
                            <p style={{ color: 'red' }}>{forget ? '' : confirmPasswordErr}</p>
                        </div>
                    )}
                    {forget ? (
                        <div className={cx('newpass-check')}>
                            <h4>Xác nhận mật khẩu :</h4>
                            <input type="password" className={cx('password')} onKeyUp={handleValidationPassConfirm} />
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
