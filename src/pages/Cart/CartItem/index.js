import styles from './style.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function CartItem({quantity}) {
    const [quantityBook, setQuantityBook] = useState(quantity);

    const handlePlus = () => {
        setQuantityBook(quantityBook + 1);
    }
    const handleMinus = () => {
        if(quantityBook > 0)
            setQuantityBook(quantityBook - 1);
    }

    return (
        <div className={cx('item-wrapper')}>
            <div style={{ width: '48px' }} className={cx('center')}>
                <input type="checkbox" />
            </div>
            <div style={{ width: '450px', margin: '4px' }}>
                <div className={cx('product-info')}>
                    <div className={cx('product-img')}>
                        <img src={require('../../../assets/images/item.jpg')} alt='product'></img>
                    </div>
                    <div className={cx('product-info-body')}>
                        <span className={cx('title')}>
                            Những Người Hàng Xóm - Bìa Cứng - Tặng Kèm Bookmark + Postcard + Thẻ Treo Bằng Nhựa Dẻo Xinh Xắn (1
                            Trong 5 Mẫu Ngẫu Nhiên)
                        </span>
                        <span>150.000đ</span>
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
                <span>140.000d</span>
            </div>
            <div className={cx('center', 'icon')}>
                <FontAwesomeIcon icon={faTrashCan} />
            </div>
        </div>
    );
}

export default CartItem;
