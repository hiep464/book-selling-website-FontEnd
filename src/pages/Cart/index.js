import style from './style.module.scss';
import classNames from 'classnames/bind';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTarp } from '@fortawesome/free-solid-svg-icons';
import CartItem from './CartItem';

const cx = classNames.bind(style);

function Cart() {
    return (
        <div className={cx('cart-block', 'container')}>
            <div className={cx('cart-block-title')}>
                <h1>GIỎ HÀNG</h1>
                <span>3 sản phẩm</span>
            </div>
            <div className={cx('frame-block')}>
                <div className={cx('all-option-block')}>
                    <div className={cx('all-option')}>
                        <input type={'checkbox'}></input>
                        <span style={{ marginRight: '1rem' }}>Chọn tất cả </span>
                        <span> 3 sản phẩm</span>
                    </div>
                    <div className={cx('all-option')}>
                        <div>Số lượng</div>
                        <div>Thành tiền</div>
                        <div style={{ color: 'rgb(255 255 255)' }}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('frame-block')}>
                <CartItem/>
            </div>
        </div>
    );
}

export default Cart;
