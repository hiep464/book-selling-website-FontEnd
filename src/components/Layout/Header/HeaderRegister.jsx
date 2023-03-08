import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function HeaderRegister(props) {
    const { disable, addDisable, attrs } = props;

    return (
        <div className={cx('account-btn', disable ? 'disable' : '')} tabIndex="-1" {...attrs}>
            <Link
                to={{
                    pathname: '/login',
                }}
                state={{ login: true }}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    textDecoration: 'none',
                }}
            >
                <button className={cx('btn', 'btn-login')} onClick={addDisable}>
                    Login
                </button>
            </Link>
            <Link
                to={{
                    pathname: '/login',
                }}
                state={{ login: false }}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    textDecoration: 'none',
                }}
            >
                <button className={cx('btn', 'btn-register')} onClick={addDisable}>
                    Regiter
                </button>
            </Link>
        </div>
    );
}

HeaderRegister.defaultProps = {
    attrs: [],
    disable: false,
    addDisable: () => {},
};

export default HeaderRegister;
