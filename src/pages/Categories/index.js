import styles from './style.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Item from './Product';

const cx = classNames.bind(styles);

function Categories() {
    return (
        <div className={cx('wrapper')}>
            <header>Title</header>
            <div className={cx('container')}>
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
                                    <td> 0d-150,000d</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td> 150,000d-300,000d</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td> 300,000d-500,000d</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td> 500,000d-700,000d</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td> 700,000d - tro len</td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
                <div className={cx('content-right')}>
                    <div className={cx('content-right-header')}>
                        <span>Sap xep theo :</span>
                        <div>
                            <span>ban chay nhat</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;
