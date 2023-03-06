import styles from './Item.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Item(props) {
    const { id, title, price, coverUrl, rating, numOfPages } = props;

    return (
        <Link to={`/bookdetail/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className={cx('container')}>
                {/* <div className={cx('image')}> */}
                <img
                    className={cx('image')}
                    src={coverUrl}
                    // src="https://cdn0.fahasa.com/media/catalog/product/k/o/komi-nu-than-so-giao-tiep---tap-11.jpg"
                    alt="Item"
                />
                {/* </div> */}
                <h4 className={cx('title')}>{title || 'Todo: title'}</h4>
                <div className={cx('price-volume')}>
                    <span className={cx('price')}>{price} đ</span>
                    <span className={cx('volume')}>{numOfPages} pages</span>
                </div>
                <div className={cx('star')}>
                    {new Array(Number.parseInt(rating)).fill(1).map((item, index) => {
                        return <FontAwesomeIcon className={cx('color')} icon={faStar} key={index} />;
                    })}
                    {/* <span>(sold)</span> */}
                </div>
            </div>
        </Link>
    );
}

export default Item;
