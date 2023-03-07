/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style.module.scss';
import { faCartShopping, faCircleCheck, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ReactReadMoreReadLess from 'react-read-more-read-less';
import Comment from './Comment';
import { useGetBookDetail, useGetBookFeedback, useAddBookToCart } from '../../api/useBook';
import { useParams } from 'react-router-dom';

import StarRatings from 'react-star-ratings';

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

function Bookdetail() {
    const { id: bookId } = useParams();

    const book = useGetBookDetail(bookId);
    console.log(book)
    const bookFeedbackResponse = useGetBookFeedback(bookId);
    const feedbackList = bookFeedbackResponse?.data;

    return (
        <div className={cx('page-wrapper')}>
            {/* <div className={cx('add-cart-noti-wrap')}>
                <div className={cx('add-cart-noti')}>
                    <FontAwesomeIcon className={cx('add-cart-noti-icon')} icon={faCircleCheck}></FontAwesomeIcon>
                    Thêm vào giỏ hàng thành công
                </div>
            </div> */}
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="#">Book Detail</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        Tên sách
                    </li>
                </ol>
            </nav>
            {/* content */}
            <BookInfo {...book} />
            <BookFeedback feedbackList={feedbackList} />
            {/* content */}
        </div>
    );
}

function BookInfo(props) {
    const {
        title,
        author,
        category,
        code,
        coverForm,
        coverType,
        coverUrl,
        createdAt,
        description,
        height,
        id,
        language,
        price,
        publishDate,
        publisher,
        rating,
        supplier,
        updatedAt,
        weight,
        width,
        numOfPages,
    } = props;

    const img = coverUrl;
    // require('../../assets/images/book_detail/image_208345.jpg')

    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }

    return (
        <>
            <div className={cx('bookdetail-wrapper')}>
                <div className={cx('row')}>
                    <div className={cx('bookdetail-thumbnail', 'col-md-5')}>
                        <div className={cx('thumbnail-img')}>
                            <img src={img} alt=""></img>
                            <div className={cx('thumbnail-btn', 'row')}>
                                <div className={cx('more-detail', 'col-md-6')}>
                                    <button type="button" className={cx('more-detail-btn')} >
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
                    <div className={cx('content-detail', 'col-md-7')}>
                        <h2 className={cx('book-title')}>{title}</h2>

                        <div className={cx('book-detail-info', 'row')}>
                            <div className={cx('book-detail-supplier', 'col-md-6')}>
                                <p className={cx('supplier')}>
                                    Nhà cung cấp: <strong>{supplier}</strong>
                                </p>
                                <p className={cx('supplier')}>
                                    Nhà xuất bản: <strong>{publisher}</strong>
                                </p>
                            </div>
                            <div className={cx('book-detail-author', 'col-md-6')}>
                                <p className={cx('author')}>
                                    Tác giả: <strong>{author}</strong>
                                </p>
                                <p className={cx('author')}>
                                    Hình thức bìa: <strong>{coverForm}</strong>
                                </p>
                            </div>
                        </div>

                        <div className={cx('star')}>
                            <FontAwesomeIcon className={cx('color')} icon={faStar} />
                            <FontAwesomeIcon className={cx('color')} icon={faStar} />
                            <FontAwesomeIcon className={cx('color')} icon={faStar} />
                            <FontAwesomeIcon className={cx('color')} icon={faStar} />
                            <FontAwesomeIcon className={cx('color')} icon={faStar} />
                            {/* <StarRatings rating={rating} starRatedColor="#ffc107" starDimension="20px" starSpacing="2px" /> */}
                        </div>

                        <div className={cx('bookdetail-price')}>{price} đ</div>
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
                            <div className={cx('book-quantity-text')}>
                                <strong>Số lượng</strong>
                            </div>
                            <div className={cx('quantity-btn')}>
                                <ButtonDecrement onClickFunc={decrementCounter} />
                                <Display message={counter} />
                                <ButtonIncrement onClickFunc={incrementCounter} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('bookdetail-wrapper')}>
                <div className={cx('bookdetail-block')}>
                    <h2>Thông tin sản phẩm</h2>
                    <div className={cx('row')}>
                        <div className={cx('bookdetail-attribute', 'col-3')}>
                            <p>Mã hàng</p>
                            <p>Tác giả</p>
                            <p>NXB</p>
                            <p>Số trang</p>
                            <p>Năm xuất bản</p>
                        </div>
                        <div className={cx('attribute-info', 'col-9')}>
                            <p>{code}</p>
                            <p>{author}</p>
                            <p>{publisher}</p>
                            <p>{numOfPages}</p>
                            <p>{publishDate}</p>
                        </div>
                    </div>
                    <p style={{ fontSize: '1.5rem' }}>
                        Giá sản phẩm trên đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình
                        thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận
                        chuyển, phụ phí hàng cồng kềnh,...
                    </p>
                    <hr></hr>
                    <div style={{ fontSize: '1.5rem' }}>
                        <ReactReadMoreReadLess
                            charLimit={400}
                            readMoreText={'Read more ▼'}
                            readLessText={'Read less ▲'}
                            readMoreStyle={{ fontWeight: '600', cursor: 'pointer', fontSize: '1.5rem' }}
                            readLessStyle={{ fontWeight: '600', cursor: 'pointer', fontSize: '1.5rem' }}
                        >
                            {description}
                        </ReactReadMoreReadLess>
                    </div>
                </div>
            </div>
        </>
    );
}

function BookFeedback(props) {
    const { rating, fbCount, feedbackList, r5, r4, r3, r2, r1 } = props;

    return (
        <div className={cx('bookdetail-wrapper')}>
            <h2>Đánh giá sản phẩm</h2>
            <div className={cx('feedback-block', 'row')}>
                <div className={cx('col-2')}>
                    <div className={cx('feedback-point')}>
                        <div style={{ fontSize: '5rem' }}>
                            {rating}
                            <span style={{ fontSize: '3rem' }}>/5</span>
                        </div>
                        <div className={cx('feedback-point-star')}>
                            <div className={cx('star')}>
                                {/* {new Array(Math.floor(rating)).fill(1).map((item, i) => (
                                    <FontAwesomeIcon className={cx('color')} icon={faStar} />
                                ))} */}
                                <StarRatings
                                    rating={rating}
                                    starRatedColor="#ffc107"
                                    starDimension="18px"
                                    starSpacing="1px"
                                />
                            </div>
                        </div>
                        <div className={cx('feedback-point-quantity')} style={{ fontSize: '13px', fontWeight: '500' }}>
                            <p>{fbCount} đánh giá</p>
                        </div>
                    </div>
                </div>
                <div className={cx('feedback-star', 'col-4')}>
                    <div className={cx('feedback-star-block')}>
                        <span style={{ fontSize: '1.5rem', margin: '0 0.7rem' }}>5 sao </span>
                        <div className={cx('progress', 'feedback-star-point')}>
                            <div
                                class="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: '100%' }}
                                aria-valuenow="30"
                                aria-valuemin="3"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <span style={{ fontSize: '1.5rem', margin: '0 0.7rem' }}>{r5}%</span>
                    </div>
                    <div className={cx('feedback-star-block')}>
                        <span style={{ fontSize: '1.5rem', margin: '0 0.7rem' }}>4 sao </span>
                        <div className={cx('progress', 'feedback-star-point')}>
                            <div
                                class="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: '100%' }}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <span style={{ fontSize: '1.5rem', margin: '0 0.7rem' }}>{r4}%</span>
                    </div>
                    <div className={cx('feedback-star-block')}>
                        <span style={{ fontSize: '1.5rem', margin: '0 0.7rem' }}>3 sao </span>
                        <div className={cx('progress', 'feedback-star-point')}>
                            <div
                                class="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: '100%' }}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <span style={{ fontSize: '1.5rem', margin: '0 0.7rem' }}>{r3}%</span>
                    </div>
                    <div className={cx('feedback-star-block')}>
                        <span style={{ fontSize: '1.5rem', margin: '0 0.7rem' }}>2 sao </span>
                        <div className={cx('progress', 'feedback-star-point')}>
                            <div
                                class="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: '100%' }}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <span style={{ fontSize: '1.5rem', margin: '0 0.7rem' }}>{r2}%</span>
                    </div>
                    <div className={cx('feedback-star-block')}>
                        <span style={{ fontSize: '1.5rem', margin: '0 0.7rem' }}>1 sao </span>
                        <div className={cx('progress', 'feedback-star-point')}>
                            <div
                                class="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: '100%' }}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <span style={{ fontSize: '1.5rem', margin: '0 0.7rem' }}>{r1}%</span>
                    </div>
                </div>
                <div className={cx('feedback-login', 'col-6')}>
                    <p>
                        Chỉ có thành viên mới có thể viết nhận xét. Vui lòng <a href="#">đăng nhập</a> hoặc
                        <a href="#"> đăng ký</a>.
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className={cx('comment-zone')}>
                <div className={cx('newest')}>
                    <p>
                        <strong>Mới nhất</strong>
                    </p>
                </div>
                {feedbackList.map((item, i) => (
                    <Comment {...item} />
                ))}
            </div>
        </div>
    );
}

BookFeedback.defaultProps = {
    feedbackList: [
        {
            createdAt: '12/23/2045',
            rating: 3,
            username: 'uname',
            content:
                '- Đóng gói cẩn thận, giao hàng rất nhanh - Nội dung được trình bày rất khoa học, dễ nhớ và rất ngắn gọn. Sách sẽ cho chúng ta một cái nhìn tổng quan nhất về ngành khoa học ',
        },
    ],
    rating: 4,
    fbCount: 3,
    r5: 32,
    r4: 32,
    r3: 32,
    r2: 32,
    r1: 32,
};

BookInfo.defaultProps = {
    title: 'How Psychology Works - Hiểu Hết Về Tâm Lý Học',
    author: 'Jo Hemmings',
    category: 'A',
    code: '123',
    coverForm: 'Bìa Cứng',
    coverType: 'Bìa Cứng',
    coverUrl: '',
    createdAt: '',
    description:
        'MỘT TRONG NHỮNG CUỐN SÁCH MỞ KHÓA HỮU ÍCH NHẤT VỀ TƯ DUY, KÝ ỨC VÀ CẢM XÚC CỦA CON NGƯỜI! Ám sợ là gì, ám sợ có thực sự đáng sợ không? Rối loạn tâm lý là gì, làm thế nào để thoát khỏi tình trạng suy nhược và xáo trộn đó? Trầm cảm là gì, vì sao con người hiện đại thường xuyên gặp và chống chọi với tình trạng u uất, mệt mỏi và tuyệt vọng này? Tìm hiểu về các vấn đề tâm trí của con người luôn đầy sức hấp dẫn và lôi cuốn, vì vậy mà tâm lý học ra đời, hình thành và phát triển rất nhiều các học thuyết và trường phái. Cuốn sách này dẫn dắt bạn đọc qua hành trình tìm hiểu các học thuyết và trường phái đó, về cách các nhà tâm lý diễn giải hành xử và tâm trí con người. Tại sao chúng ta có những hành vi, suy nghĩ và cảm xúc như vậy, chúng diễn ra và kết thúc như thế nào, chúng ảnh hưởng lâu dài, gián đoạn hay ngắn ngủỉ đến đời sống của chúng ta ra sao, làm thế nào để chúng ta thoát khỏi những tác động tiêu cực của chúng? Cuốn sách có cấu trúc khoa học, trình bày dễ hiểu, súc tích, thiết kế và minh họa đẹp mắt này sẽ mang đến cho bạn những hiểu biết về các học thuyết tâm lý và các phương pháp trị liệu, từ các vấn đề cá nhân đến những ứng dụng thực tế. Mã hàng 8935235227699 Tên Nhà Cung Cấp Nhã Nam Tác giả Jo Hemmings Người Dịch Trần Trương Phúc Hạnh, Phương Hoài Nga hiệu đính NXB NXB Thế Giới Năm XB 2020 Trọng lượng (gr) 980 Kích Thước Bao Bì 23 x 19.5 cm Số trang 247 Hình thức Bìa Cứng Sản phẩm hiển thị trong Nhã Nam Tủ Sách Tâm Lý Kỹ Năng Sản phẩm bán chạy nhất Top 100 sản phẩm Tâm lý bán chạy của tháng Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,... MỘT TRONG NHỮNG CUỐN SÁCH MỞ KHÓA HỮU ÍCH NHẤT VỀ TƯ DUY, KÝ ỨC VÀ CẢM XÚC CỦA CON NGƯỜI! Ám sợ là gì, ám sợ có thực sự đáng sợ không? Rối loạn tâm lý là gì, làm thế nào để thoát khỏi tình trạng suy nhược và xáo trộn đó? Trầm cảm là gì, vì sao con người hiện đại thường xuyên gặp và chống chọi với tình trạng u uất, mệt mỏi và tuyệt vọng này? Tìm hiểu về các vấn đề tâm trí của con người luôn đầy sức hấp dẫn và lôi cuốn, vì vậy mà tâm lý học ra đời, hình thành và phát triển rất nhiều các học thuyết và trường phái. Cuốn sách này dẫn dắt bạn đọc qua hành trình tìm hiểu các học thuyết và trường phái đó, về cách các nhà tâm lý diễn giải hành xử và tâm trí con người. Tại sao chúng ta có những hành vi, suy nghĩ và cảm xúc như vậy, chúng diễn ra và kết thúc như thế nào, chúng ảnh hưởng lâu dài, gián đoạn hay ngắn ngủỉ đến đời sống của chúng ta ra sao, làm thế nào để chúng ta thoát khỏi những tác động tiêu cực của chúng?',
    height: '',
    id: '',
    language: '',
    price: '186.000',
    publishDate: '',
    publisher: 'NXB Thế Giới',
    supplier: 'Nhã Nam',
    updatedAt: '',
    weight: '',
    width: '',
    numOfPages: '247',
};

export default Bookdetail;
