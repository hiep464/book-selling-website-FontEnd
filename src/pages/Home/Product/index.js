import styles from './product.module.scss';
import classNames from 'classnames/bind';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Product() {
    return (
        <a href='#'>
            <div className={cx('product-item', 'row')}>
            <div className={cx('product-img', 'col-md-6')}>
                <img src={require('../../../assets/images/book-imgs/8935212318389.jpg')} alt=""></img>
            </div>
            <div className={cx('product-title', 'col-md-6')}>
                <h5>Ước Mơ Của Bé - Lớn Lên Bé Làm Bưu Tá</h5>
                <div className={cx('product-price')}>5.625₫</div>
                <div className={cx('star')}>
                    <FontAwesomeIcon className={cx('color')} icon={faStar}/>
                    <FontAwesomeIcon className={cx('color')} icon={faStar}/>
                    <FontAwesomeIcon className={cx('color')} icon={faStar}/>
                    <FontAwesomeIcon className={cx('color')} icon={faStar}/>
                    <FontAwesomeIcon className={cx('color')} icon={faStar}/>
                    <span>(sold)</span>
                </div>
            </div>
        </div>
        </a>
    );
}

export default Product;
