import { useState } from 'react';
import styles from './style.module.scss';
import classNames from 'classnames/bind';
import * as userService from '../../../apiServices/userService';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const userInfo = {
    email: '',
    name: '',
    password: '',
    role: 'USER',
    gender: 'MALE',
    phone: '',
};
function LoginItem(data) {
    const [active, setActive] = useState(data.data);
    const addActive = () => setActive(true);
    const remoteActive = () => setActive(false);

    const [forget, setForget] = useState(false);
    const addForget = () => setForget(true);
    const remoteFroget = () => setForget(false);

    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [confirmPasswordErr, setConfirmPasswordErr] = useState('');
    const handleValidation = () => {
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
    const register = async () => {
        if (account === '') {
            console.log('ban chua nhap email');
        } else if (password === '') {
            console.log('ban chua nhap pass');
        } else if (passwordConfirm === '') {
            console.log('xác nhận mật khẩu');
        } else if (password === passwordConfirm) {
            userInfo.email = account;
            userInfo.password = password;
            const res = await userService.postInfo(userInfo);
            console.log(res);
        } else {
            console.log('nhap sai pw');
            setConfirmPasswordErr('Confirm password is not matched');
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
                        <input type="text" className={cx('phone-email')} onChange={(e) => setAccount(e.target.value)} />
                    </div>
                    <div className={cx('pass')}>
                        <h4>{forget ? 'Mật khẩu mới :' : 'Mật khẩu:'}</h4>
                        <input
                            type="password"
                            className={cx('password')}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyUp={handleValidation}
                        />
                        <p style={{color : 'red'}}>{passwordErr}</p>
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
                            />
                            <p style={{color : 'red'}}>{forget ? '' : confirmPasswordErr}</p>
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
                    {forget ? (
                        <button>Xác nhận</button>
                    ) : active ? (
                        <button>Đăng nhập</button>
                    ) : (
                        <Link 
                            to="/"
                            state={{ user: true }}
                        >
                            <button onClick={register}>Đăng ký</button>
                        </Link>
                    )}
                    {forget ? <button onClick={remoteFroget}>Quay lại</button> : ''}
                </div>
            </div>
        </div>
    );
}

export default LoginItem;
