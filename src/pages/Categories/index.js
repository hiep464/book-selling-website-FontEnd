import styles from './style.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Item from './Product';

const cx = classNames.bind(styles);

function Categories() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                Home
                <FontAwesomeIcon className={cx('header-icon')} icon={faChevronRight} />
                All categories
            </header>
            <div className={cx('container')}>
                <div className={cx('content-left-wraper')}>
                    <div className={cx('content-left')}>
                        <div className={cx('content-left-header')}>
                            <span>Nhóm sản phẩm</span>
                            <span>All categories</span>
                        </div>
                        <div className={cx('categories-list')}>
                            <ul className={cx('menu-list')}>
                                <li>Sách tiếng việt</li>
                                <li>Sách tiếng anh</li>
                            </ul>
                        </div>
                        <div className={cx('price')}>
                            <span>Giá</span>
                            <form>
                                <table>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td> 0đ - 150,000đ</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td> 150,000đ - 300,000đ</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td> 300,000đ - 500,000đ</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td> 500,000đ - 700,000đ</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td> 700,000đ - trở lên</td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                        <div className={cx('age')}>
                            <span>Độ tuổi</span>
                            <form>
                                <table>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td> 3+</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td> 6+</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td> 8 - 12</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td> 12+</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td> 16+</td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                        <div className={cx('content-left-footer')}></div>
                    </div>
                </div>
                <div className={cx('content-right')}>
                    <div className={cx('content-right-header')}>
                        <span>Sắp xếp theo :</span>
                        <select>
                            <option>bán chạy tuần</option>
                            <option>bán chạy tháng</option>
                            <option>Nổi bật</option>
                            <option>Mới nhất</option>
                        </select>
                    </div>
                    <div className={cx('products-list')}>
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                    <div className={cx('content-right-footer')}>
                        <button className={cx('number-page', 'active')}> 1 </button>
                        <button className={cx('number-page')}> 2 </button>
                        <button className={cx('number-page')}> 3 </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;
