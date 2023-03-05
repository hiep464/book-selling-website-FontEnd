import styles from './style.module.scss';
import classNames from 'classnames/bind';
import CartItem from './CartItem';
import { useEffect, useState } from 'react';
import * as cartService from '../../apiServices/cartService'

const cx = classNames.bind(styles);

function Cart() {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const fetchApi = async () =>{
            const result = await cartService.getCart(1);
            setCart(result.data);
        }
        fetchApi();
    }, [])
    return (
        <div className={cx('page-wrapper')}>
            <header className={cx('page-title')}>Gio hang (x san pham)</header>
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
                        {cart.map((item) =>(
                            <CartItem key={item.bookId} quantity={item.quantity}/>
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
 