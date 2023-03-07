import style from './home.module.scss';
import classNames from 'classnames/bind';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetBookCategories } from '../../api/useBook';
import ProductCategoryPreview from './ProductCategoryPreview';
import StaticBanner from './StaticBanner';
import CategoryItem from './CategoryItem';

const cx = classNames.bind(style);

const maxCategory = 8;

function Home() {
    const categories = useGetBookCategories();

    return (
        <main className={cx('homepage')}>
            {/* Static banner */}
            <StaticBanner />

            {/* Category list */}
            <div className={cx('frame')}>
                <div className={cx('frame-title')}>
                    <FontAwesomeIcon icon={faListUl} className={cx('category-icon')} />
                    <span>Danh mục sản phẩm</span>
                </div>
                <div className={cx('category-lists', 'row')}>
                    {categories?.map((category, index) => {
                        if (index < maxCategory) return <CategoryItem key={index} category={category} />;
                    })}
                </div>
            </div>

            {/* Category preview list */}
            {categories?.map((category, index) => {
                return <ProductCategoryPreview key={index} category={category} />;
            })}

            {/* <Login /> */}
        </main>
    );
}

export default Home;
