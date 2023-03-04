import styles from './product.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Product(props) {
    const { id, title, url, price, rating } = props;
    const img = url;
    // const img = url.startsWith('http') ? url : require(url);
    // console.log(img);

    return (
        <a href="#">
            <div className={cx('product-item', 'row')}>
                <div className={cx('product-img', 'col-md-6')}>
                    <img src={img} alt=""></img>
                </div>
                <div className={cx('product-title', 'col-md-6')}>
                    <h5>{title}</h5>
                    <div className={cx('product-price')}>{price}</div>
                    <div className={cx('star')}>
                        {new Array(rating).fill(1).map((_, i) => (
                            <FontAwesomeIcon key={i} className={cx('color')} icon={faStar} />
                        ))}
                        <span>(sold)</span>
                    </div>
                </div>
            </div>
        </a>
    );
}

Product.defaultProps = {
    id: 1,
    title: 'Ước Mơ Của Bé - Lớn Lên Bé Làm Bưu Tá',
    url: '../../../assets/images/book-imgs/8935212318389.jpg',
    price: '5.625₫',
    rating: 5,
};

export default Product;
