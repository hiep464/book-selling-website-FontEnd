import styles from './Item.module.scss'
import classNames from 'classnames/bind';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Item() {
    return (
        <div className={cx('container')}>
            <div className={cx('image')}>
                {/* <image src="https://cdn0.fahasa.com/media/catalog/product/k/o/komi-nu-than-so-giao-tiep---tap-11.jpg" alt="Item"/> */}
            </div>
            <span className={cx('title')}>
                Title
            </span>
            <div className={cx('price-volume')}>
                <span className={cx('price')}>10,000d</span>
                <span className={cx('volume')}>tap 14</span>
            </div>
            <div className={cx('star')}>
                <FontAwesomeIcon className={cx('color')} icon={faStar}/>
                <FontAwesomeIcon className={cx('color')} icon={faStar}/>
                <FontAwesomeIcon className={cx('color')} icon={faStar}/>
                <FontAwesomeIcon className={cx('color')} icon={faStar}/>
                <FontAwesomeIcon className={cx('color')} icon={faStar}/>
            </div>
        </div>
    );
}

export default Item;