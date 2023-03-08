import styles from './style.module.scss';
import classNames from 'classnames/bind';
import CartItem from './CartItem';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
// import { useGetBookInCart } from '../../api/useBook';
import * as cartService from '../../apiServices/cartService';

const cx = classNames.bind(styles);

function Cart() {
    const { state } = useContext(AuthContext);
    const [cartList, setCartList] = useState([]);
    // const cart = useGetBookInCart(state['userId']);
    // const cartList = cart?.data;
    // console.log(cart);
    useEffect(() =>{
        const fetchApi = async () => {
            const result = await cartService.getCart(state['userId']);
            console.log(result);
            setCartList(result);
        }   
        fetchApi();
    },[])
    return (
        <div className={cx('page-wrapper')}>
            <header className={cx('page-title')}>Giỏ Hàng ({cartList?.length} sản phẩm)</header>
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
                        {cartList?.map((item) => (
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
                    <div className={cx('select-address')}>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <button className={cx('btn')}>THANH TOÁN</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
