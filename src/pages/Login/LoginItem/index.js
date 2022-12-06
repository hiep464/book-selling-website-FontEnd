import { useState } from 'react';
import styles from './style.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LoginItem() {

    const [active, setActive] = useState(true);
    const addActive = () => setActive(true);
    const remoteActive = () => setActive(false);

    // const act = 'active';
    
    return ( 
        <div className={cx('form')}>
            <header className={cx('form-header')}>
                <button className={cx('form-header-register', active ? 'active' : '')} onClick={addActive} >Đăng nhập</button>
                <button className={cx('form-header-login', active ? '' : 'active')} onClick={remoteActive}>Đăng ký</button>
            </header>
            <div className={cx('register')}>
                <form className={cx('register-form')}>
                    <div className={cx('account')}>
                        <h4>Tài khoản :</h4>
                        <input type="text" className={cx('phone-email')} />
                    </div>
                    <div className={cx('pass')}>
                        <h4>Mật khẩu :</h4>
                        <input type="password" className={cx('password')} />
                    </div>
                    {active ? '':
                        <div className={cx('pass-check')}>
                            <h4>Xác nhận mật khẩu :</h4>
                            <input type="password" className={cx('password')} />
                        </div>
                    }
                </form>
                {active ? <a href="/#">Quên mật khẩu?</a> : ''}
                <div className={cx('register-btn')}>
                    <button>{active ? 'Đăng nhập' : 'Đăng ký'}</button>
                    <button>Bỏ qua</button>
                </div>
            </div>
        </div>
     );
}

export default LoginItem;