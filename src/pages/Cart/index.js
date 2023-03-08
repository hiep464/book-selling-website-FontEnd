import styles from './style.module.scss';
import classNames from 'classnames/bind';
import CartItem from './CartItem';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
// import { useGetBookInCart } from '../../api/useBook';
import * as cartService from '../../apiServices/cartService';
import * as addressService from '../../apiServices/adressService';

const cx = classNames.bind(styles);

function Cart() {
    const { state } = useContext(AuthContext);
    const [cartList, setCartList] = useState([]);
    const [total, setTotal] = useState(0);
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState(false);
    const [districts, setDistricts] = useState([]);
    const [district, setDistrict] = useState(false);
    const [wards, setWards] = useState([]);
    const [ward, setWard] = useState(false);

    const [all, setAll] = useState(false);
    
    // const cart = useGetBookInCart(state['userId']);
    // const cartList = cart?.data;
    // console.log(cart);
    useEffect(() =>{
        const fetchApi = async () => {
            const result = await cartService.getCart(state['userId']);
            // console.log(result);
            setCartList(result);
        }   
        fetchApi();
    },[])
    useEffect(() => {
        cartList?.map((item) => {
            setTotal(total + (item?.book?.price * item?.quantity));
        })
    }, [cartList])

    useEffect(() => {
        const fetchApi = async () => {
            const result = await addressService.getCities();
            setCities(result);
        }   
        fetchApi();
    }, [])

    const handleChangeCity = event => {
        console.log(event.target.value);
        const fetchApi = async () => {
            const result = await addressService.getDistrics(1);
            console.log(result)
            setDistricts(result);
        }
        fetchApi();
        setCity(true);
    };

    const handleChangeDistrict = event => {
        console.log(event.target.value);
        const fetchApi = async () => {
            const result = await addressService.getWards(1, 1);
            console.log(result)
            setWards(result);
        }
        fetchApi();
        setDistrict(true);
    };

    const handleChangeWard = event => {
        console.log(event.target.value);
        setWard(true);
    };
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
                        <span>{total / 2}</span>
                    </div>

                    <div className={cx('address-confirm')}>
                        <p>Xác nhận địa chỉ</p>
                    </div>
                    <div className={cx('select-address')}>
                        <select class="form-select" aria-label="Default select example" onChange={handleChangeCity}>
                            <option selected>Chọn thành phố</option>
                            {
                                cities.map((item) => (
                                    <option value={item?.code} key={item?.code}>{item?.name}</option>
                                ))
                            }
                        </select>
                        <select class="form-select" aria-label="Default select example" onChange={handleChangeDistrict}>
                            <option selected>Chọn quận huyện</option>
                            {/* <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option> */}
                            {
                                districts.map((item) => (
                                    <option value={item?.code} key={item?.code}>{item?.name}</option>
                                ))
                            }
                        </select>
                        <select class="form-select" aria-label="Default select example" onChange={handleChangeWard}>
                            <option selected>Chọn phường xã</option>
                            {
                                wards.map((item) => (
                                    <option value={item?.code} key={item?.code}>{item?.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className={cx('cart-right-header', 'flex')}>
                        <span>Phí ship:</span>
                        <span>{(city && district && ward) ? '30000' : '0'} đ</span>
                    </div>
                    <div className={cx('cart-right-body', 'flex')}>
                        <span>Tống số tiền</span>
                        <span>{(city && district && ward) ? total / 2 + 30000 : ''}</span>
                    </div>
                    <button className={cx('btn')}>THANH TOÁN</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
