import styles from './style.module.scss';
import classNames from 'classnames/bind';
import CartItem from './CartItem';
import { useState, useContext } from 'react';
import ReactLoading from "react-loading";
import { AuthContext } from '../../context/AuthContext';
import {useGetBookInCart} from '../../api/useBook';

const cx = classNames.bind(styles);

function Cart() {
    // const [cart, setCart] = useState([]);
    // const [loading, setLoading] = useState(false);
    
    // useEffect(() => {
    //     const fetchApi = async () => {
    //         setLoading(true);
    //         const result = await cartService.getCart(1);
    //         setCart(result.data);
    //         console.log(result.data);
    //         setLoading(false);
    //     };
    //     fetchApi();
    // }, []);

    const { state } = useContext(AuthContext);
    const cart = useGetBookInCart(state['userId']);
    const cartList = cart?.data;

    return (
        <div className={cx('page-wrapper')}>
            {/* {loading ? <div className={cx('loading')}><ReactLoading type={'spinningBubbles'} color={'#ccc'} /></div> : ''} */}
            <header className={cx('page-title')}>Giỏ Hàng ({cartList.length} sản phẩm)</header>
            <div className={cx('cart-wrapper')}>
                <div className={cx('cart-left')}>
                    <div className={cx('cart-navbar')}>
                        <div style={{ width: '48px' }} className={cx('cart-navbar-input')}>
                            <input type="checkbox"></input>
                        </div>
                        <div style={{ width: '456px' }} className={cx('sellect-all')}>
                            <span>Chọn tất cả</span>
                        </div>
                        <div style={{ width: '90px' }} className={cx('amount')}>
                            <span>Số lượng</span>
                        </div>
                        <div style={{ width: '146px' }}>
                            <span>Thành tiền</span>
                        </div>
                    </div>
                    <div className={cx('cart-item')}>
                        {cartList.map((item) => (
                            <CartItem
                                key={item.bookId}
                                quantity={item.quantity}
                                bookId={item.bookId}
                                userId={item.userId}
                            />
                        ))}
                    </div>
                </div>
                <div className={cx('cart-right')}>
                    <div className={cx('cart-right-header', 'flex')}>
                        <span>Thành tiền</span>
                        <span>0đ</span>
                    </div>
                    <div className={cx('cart-right-body', 'flex')}>
                        <span>Tống số tiền (gồm VAT)</span>
                        <span>0đ</span>
                    </div>
                    <button className={cx('btn')}>THANH TOÁN</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
