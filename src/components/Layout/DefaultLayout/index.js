import Header from '../Header/index.js';
import Footer from '../Footer/index.js';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container-wrap')}>
                    <div className={cx('container')}>{children}</div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
export default DefaultLayout;
