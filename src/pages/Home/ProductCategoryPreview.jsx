import style from './home.module.scss';
import classNames from 'classnames/bind';
import Product from './Product';
import { useGetBooks } from '../../api/useBook';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const cx = classNames.bind(style);

function ProductCategoryPreview({ category }) {
    const bookListResponse = useGetBooks({ page: 1, limit: 4 }, { sortBy: 'price', sortType: 'asc', category });
    const books = bookListResponse?.data || [];

    const navigate = useNavigate();
    const navigateToBookDetail = useCallback(
        (id) => {
            navigate(`/bookdetail/${id}`);
        },
        [navigate],
    );
    const navigateToCategory = useCallback(() => {
        navigate(`/categories`, { state: { initCategory: category } });
    }, [navigate, category]);

    return (
        <div className={cx('frame')}>
            <div className={cx('product-category-title', 'frame-title')}>
                <span>{category}</span>
            </div>
            <div className={cx('category-product-list')}>
                <div className={cx('row')}>
                    <div className={cx('advertise', 'col-md-4')}>
                        <img
                            src={require('../../assets/images/advertisements/BannerBlock09_KinhTe_350x415.jpg')}
                            alt=""
                        ></img>
                    </div>
                    <div className={cx('col-md-8')}>
                        <div className={cx('product-list')}>
                            {books?.map((book) => (
                                <Product
                                    key={book.id}
                                    id={book.id}
                                    url={book.coverUrl}
                                    title={book.title}
                                    rating={book.rating}
                                    price={book.price}
                                    onClick={navigateToBookDetail}
                                ></Product>
                            ))}
                        </div>
                        <div className={cx('more-detail')}>
                            <button type="button" className={cx('more-detail-btn')} onClick={navigateToCategory}>
                                Xem thêm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProductCategoryPreview.defaultProps = {
    category: 'Fake category',
};

export default ProductCategoryPreview;
