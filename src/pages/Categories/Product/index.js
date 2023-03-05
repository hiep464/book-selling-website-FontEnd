import styles from './Item.module.scss'
import classNames from 'classnames/bind';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Item() {
    return (
        <Link to="/bookdetail" style={{textDecoration: 'none', color: 'black'}}>
            <div className={cx('container')}>
                <div className={cx('image')}>
                    <image src="https://cdn0.fahasa.com/media/catalog/product/k/o/komi-nu-than-so-giao-tiep---tap-11.jpg" alt="Item"/>
                </div>
                <h4 className={cx('title')}>
                    Title
                </h4>
                <div className={cx('price-volume')}>
                    <span className={cx('price')}>Price</span>
                    <span className={cx('volume')}>volume</span>
                </div>
                <div className={cx('star')}>
                    <FontAwesomeIcon className={cx('color')} icon={faStar}/>
                    <FontAwesomeIcon className={cx('color')} icon={faStar}/>
                    <FontAwesomeIcon className={cx('color')} icon={faStar}/>
                    <FontAwesomeIcon className={cx('color')} icon={faStar}/>
                    <FontAwesomeIcon className={cx('color')} icon={faStar}/>
                    <span>(sold)</span>
                </div>
            </div>
        </Link>
    );
}

export default Item;