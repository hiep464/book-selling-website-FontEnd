/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style.module.scss';
import { faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(style);

function ButtonIncrement(props) {
    return (
            <a style={{ color: '#c1c1c1' }}>
                <FontAwesomeIcon icon={faPlus} onClick={props.onClickFunc}/>
            </a>
    );
}
function ButtonDecrement(props) {
    return (
            <a style={{ color: '#c1c1c1' }}>
                <FontAwesomeIcon icon={faMinus} onClick={props.onClickFunc}/>
            </a>
    );
}
function Display(props) {
    return <label style={{ marginLeft: '.5rem' }}>{props.message}</label>;
}

function Bookdetail() {
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }
    return (
        <div className={cx('page-wrapper')}>
            <div className={cx('bookdetail-wrapper', 'row')}>
                <div className={cx('bookdetail-thumbnail', 'col-md-4')}>
                    <div className={cx('thumbnail-img')}>
                        <img src={require('../../assets/images/book_detail/image_208345.jpg')} alt=""></img>
                        <div className={cx('thumbnail-btn', 'row')}>
                            <div className={cx('more-detail', 'col-md-6')}>
                                <button type="button" className={cx('more-detail-btn')}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    <span>Thêm vào giỏ hàng</span>
                                </button>
                            </div>
                            <div className={cx('more-detail', 'col-md-6')}>
                                <button type="button" className={cx('buy-now', 'more-detail-btn')}>
                                    Mua ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('content-detail', 'col-md-8')}>
                    <h2 className={cx('book-title')}>How Psychology Works - Hiểu Hết Về Tâm Lý Học</h2>

                    <div className={cx('book-detail-info', 'row')}>
                        <div className={cx('book-detail-supplier', 'col-md-6')}>
                            <p className={cx('supplier')}>
                                Nhà cung cấp: <strong>Nhã Nam</strong>
                            </p>
                            <p className={cx('supplier')}>
                                Nhà xuất bản: <strong>NXB Thế Giới</strong>
                            </p>
                        </div>
                        <div className={cx('book-detail-author', 'col-md-6')}>
                            <p className={cx('author')}>
                                Tác giả: <strong>Jo Hemmings</strong>
                            </p>
                            <p className={cx('author')}>
                                Hình thức bìa: <strong>Bìa Cứng</strong>
                            </p>
                        </div>
                    </div>

                    <div className={cx('star')}>
                        <FontAwesomeIcon className={cx('color')} icon={faStar} />
                        <FontAwesomeIcon className={cx('color')} icon={faStar} />
                        <FontAwesomeIcon className={cx('color')} icon={faStar} />
                        <FontAwesomeIcon className={cx('color')} icon={faStar} />
                        <FontAwesomeIcon className={cx('color')} icon={faStar} />
                        <span>(sold)</span>
                    </div>

                    <div className={cx('bookdetail-price')}>186.000 đ</div>
                    <div className={cx('book-detail-info', 'book-more-info', 'row')}>
                        <div className={cx('right-part', 'col-md-2')}>
                            <p>Chính sách đổi trả</p>
                        </div>
                        <div className={cx('left-part', 'col-md-10')}>
                            <p>
                                Đổi trả sản phẩm trong 30 ngày <a href="#">Xem thêm</a>{' '}
                            </p>
                        </div>
                    </div>
                    <div className={cx('book-quantity')}>
                        <div className={cx('book-quantity-text')}><strong>Số lượng</strong></div>
                        <div className={cx('quantity-btn')}>
                            <ButtonDecrement onClickFunc={decrementCounter} />
                            <Display message={counter} />
                            <ButtonIncrement onClickFunc={incrementCounter} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('bookdetail-wrapper')}>Bookdetail info</div>
            <div className={cx('bookdetail-wrapper')}>Feed back</div>
        </div>
    );
}

export default Bookdetail;
