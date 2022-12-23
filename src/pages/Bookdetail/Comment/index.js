/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './comment.module.scss';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Comment() {
    return (
        <div className={cx('comment-block')}>
            <div className={cx('row')}>
                <div className={cx('user', 'col-2')}>
                    <div className={cx('name')}><strong>ABC</strong></div>
                    <div className={cx('date')} style={{color: '#7A7E7F'}}>04/8/2022</div>
                    <div>
                        <span style={{color: '#c92127'}}>Đã mua hàng</span>
                    </div>
                </div>
                <div className={cx('col-10')}>
                    <div className={cx('feedback-point-star')}>
                        <div className={cx('star')}>
                            <FontAwesomeIcon className={cx('color')} icon={faStar} />
                            <FontAwesomeIcon className={cx('color')} icon={faStar} />
                            <FontAwesomeIcon className={cx('color')} icon={faStar} />
                            <FontAwesomeIcon className={cx('color')} icon={faStar} />
                            <FontAwesomeIcon className={cx('color')} icon={faStar} />
                        </div>
                    </div>
                    <div className={cx('comment-content')}>
                        - Đóng gói cẩn thận, giao hàng rất nhanh - Nội dung được trình bày rất khoa học, dễ nhớ và rất
                        ngắn gọn. Sách sẽ cho chúng ta một cái nhìn tổng quan nhất về ngành khoa học tâm lý. Tuy nhiên
                        sẽ hơi khô khan 1 chút vì là sách viết về khoa học.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;
