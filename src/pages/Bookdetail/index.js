import classNames from 'classnames/bind';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style.module.scss';

const cx = classNames.bind(style);

function Bookdetail() {
    return ( 
        <div className={cx('page-wrapper')}>
            <div className={cx('bookdetail-wrapper')}>
                Bookdetail
            </div>
            <div className={cx('bookdetail-wrapper')}>
                Bookdetail info
            </div>
            <div className={cx('bookdetail-wrapper')}>
                Feed back
            </div>
        </div>
     );
}

export default Bookdetail;