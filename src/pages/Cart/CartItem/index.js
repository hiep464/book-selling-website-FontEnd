import style from './item.module.scss';
import classNames from 'classnames/bind';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTarp } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ReactReadMoreReadLess from 'react-read-more-read-less';

const cx = classNames.bind(style);

function ButtonIncrement(props) {
    return (
        <a style={{ color: '#c1c1c1' }}>
            <FontAwesomeIcon icon={faPlus} onClick={props.onClickFunc} />
        </a>
    );
}
function ButtonDecrement(props) {
    return (
        <a style={{ color: '#c1c1c1' }}>
            <FontAwesomeIcon icon={faMinus} onClick={props.onClickFunc} />
        </a>
    );
}
function Display(props) {
    return <label style={{ marginLeft: '.5rem' }}>{props.message}</label>;
}

function CartItem() {
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }
    return (
        <div className={cx('cart-item-block')}>
            <div className={cx('row')}>
                <div className={cx('col-1')}>
                    <input type={'checkbox'}></input>
                </div>
                <div className={cx('book-part', 'col-6')}>
                    <div className={cx('book-img')}>
                        <img style={{width:'100%'}}
                        src={require('../../../assets/images/book-imgs/8935212318389.jpg')} alt=''></img>
                    </div>
                    <div className={cx('book-title')}>
                        <p>Title</p>
                        <p>000.000 đ</p>
                    </div>
                </div>
                <div className={cx('col-5')}>
                    <div className={cx('quantity-btn')}>
                        <ButtonDecrement onClickFunc={decrementCounter} />
                        <Display message={counter} />
                        <ButtonIncrement onClickFunc={incrementCounter} />
                    </div>
                    <div className={cx('total-item-price')}>000.000 đ</div>
                    <div>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
