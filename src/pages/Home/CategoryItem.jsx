import { useCallback } from 'react';
import style from './home.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(style);

function CategoryItem({ category }) {
    const navigate = useNavigate();
    const navigateToCategory = useCallback(() => {
        navigate(`/categories`, { state: { initCategory: category } });
    }, [navigate, category]);

    return (
        <div className={cx('category-item', 'col')}>
            <a href="#" onClick={navigateToCategory}>
                <img src={require('../../assets/images/categories/foreign-books.png')} alt=""></img>
                <p>{category}</p>
            </a>
        </div>
    );
}

CategoryItem.defaultProps = {
    category: 'category',
};

export default CategoryItem;
