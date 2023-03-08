import styles from './style.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import * as cartService from '../../../apiServices/cartService';
import {useGetBookDetail} from '../../../api/useBook';


const cx = classNames.bind(styles);
const data = {quantity : 0}

function CartItem({quantity, userId, bookId}) {
    const [quantityBook, setQuantityBook] = useState(quantity);
    const book = useGetBookDetail(bookId);
    // console.log(book);
    const handlePlus = () => {
        setQuantityBook(quantityBook + 1);
    }
    const handleMinus = () => {
        if(quantityBook > 0)
            setQuantityBook(quantityBook - 1);
    }
    const [active, setActive] = useState(false);
    
    useEffect(() => {
        data.quantity = quantityBook;
        const updateQuantity = async () => {
            const res = await cartService.updateCart(bookId, userId, data);
            // console.log(res);
        }
        updateQuantity();
    }, [quantityBook, bookId, userId])

    const removeItem = async () => {
        setActive(true);
        const res = await cartService.deleteItem(bookId,userId);
        return res;
    }

    return (
        <div className={cx('item-wrapper', active ? 'disable' : '')}>
            <div style={{ width: '48px' }} className={cx('center')}>
                <input type="checkbox" />
            </div>
            <div style={{ width: '450px', margin: '4px' }}>
                <div className={cx('product-info')}>
                    <div className={cx('product-img')}>
                        <img src={book?.coverUrl} alt='product'></img>
                    </div>
                    <div className={cx('product-info-body')}>
                        <span className={cx('title')}>
                            {book?.title}
                        </span>
                        <span>{book?.price}</span>
                    </div>
                </div>
            </div>
            <div className={cx('center')}>
                <div className={cx('select')}>
                    <FontAwesomeIcon className={cx('minus')} icon={faMinus} onClick={handleMinus}></FontAwesomeIcon>
                    <span className={cx('number')}>{quantityBook}</span>
                    <FontAwesomeIcon className={cx('plus')} icon={faPlus} onClick={handlePlus}></FontAwesomeIcon>
                </div>
            </div>
            <div style={{ width: '146px' }} className={cx('center')}>
                <span>{book?.price * quantityBook}</span>
            </div>
            <div className={cx('center', 'icon')}>
                <FontAwesomeIcon icon={faTrashCan} onClick={removeItem}/>
            </div>
        </div>
    );
}

export default CartItem;
