/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style.module.scss';
import { faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import ReactReadMoreReadLess from 'react-read-more-read-less';
import Comment from './Comment';
import * as feedBackService from '../../apiServices/feedbackServices';
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

const stars = [
    { index: 5, sum: 0 },
    { index: 4, sum: 0 },
    { index: 3, sum: 0 },
    { index: 2, sum: 0 },
    { index: 1, sum: 0 },
];

function Bookdetail() {
    const [counter, setCounter] = useState(1);
    const [feedbacks, setFeedback] = useState([]);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }

    useEffect(() => {
        const fetchApi = async () => {
            const result = await feedBackService.getAll(1);
            setFeedback(result.data);
            result.data.map((count) => {
                stars.map((star) => {
                    if (count.star === star.index) star.sum++;
                    return 1;
                });
                return 1;
            });
        };
        fetchApi();
    }, []);

    return (
        <div className={cx('page-wrapper')}>
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
            <div className={cx('bookdetail-wrapper')}>
                <div className={cx('row')}>
                    <div className={cx('bookdetail-thumbnail', 'col-md-5')}>
                        <div className={cx('thumbnail-img')}>
                            <img src={require('../../assets/images/book_detail/image_208345.jpg')} alt=""></img>
                            <div className={cx('thumbnail-btn', 'row')}>
                                <div className={cx('more-detail', 'col-md-6')}>
                                    <button type="button" className={cx('more-detail-btn')}>
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
                        <h2 className={cx('book-title')}>How Psychology Works - Hiểu Hết Về Tâm Lý Học</h2>

                        <div className={cx('book-detail-info', 'row')}>
                            <div className={cx('book-detail-supplier', 'col-md-6')}>
                                <p className={cx('supplier')}>
                                    Nhà cung cấp: <strong>Nhã Nam</strong>
                                </p>
                                <p className={cx('supplier')}>
                                    Nhà xuất bản: <strong>NXB Thế Giới</strong>
                                </p>
                            </div>
                            <div className={cx('book-detail-author', 'col-md-6')}>
                                <p className={cx('author')}>
                                    Tác giả: <strong>Jo Hemmings</strong>
                                </p>
                                <p className={cx('author')}>
                                    Hình thức bìa: <strong>Bìa Cứng</strong>
                                </p>
                            </div>
                        </div>

                        <div className={cx('star')}>
                            {/* <FontAwesomeIcon className={cx('color')} icon={faStar} />
                            <FontAwesomeIcon className={cx('color')} icon={faStar} />
                            <FontAwesomeIcon className={cx('color')} icon={faStar} />
                            <FontAwesomeIcon className={cx('color')} icon={faStar} />
                            <FontAwesomeIcon className={cx('color')} icon={faStar} /> */}
                            <StarRatings rating={4} starRatedColor="#ffc107" starDimension="20px" starSpacing="2px" />
                            <span>(sold)</span>
                        </div>

                        <div className={cx('bookdetail-price')}>186.000 đ</div>
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
                            <p>Mã hàng</p>
                            <p>Tác giả</p>
                            <p>NXB</p>
                            <p>Số trang</p>
                            <p>Năm xuất bản</p>
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
                            MỘT TRONG NHỮNG CUỐN SÁCH MỞ KHÓA HỮU ÍCH NHẤT VỀ TƯ DUY, KÝ ỨC VÀ CẢM XÚC CỦA CON NGƯỜI! Ám
                            sợ là gì, ám sợ có thực sự đáng sợ không? Rối loạn tâm lý là gì, làm thế nào để thoát khỏi
                            tình trạng suy nhược và xáo trộn đó? Trầm cảm là gì, vì sao con người hiện đại thường xuyên
                            gặp và chống chọi với tình trạng u uất, mệt mỏi và tuyệt vọng này? Tìm hiểu về các vấn đề
                            tâm trí của con người luôn đầy sức hấp dẫn và lôi cuốn, vì vậy mà tâm lý học ra đời, hình
                            thành và phát triển rất nhiều các học thuyết và trường phái. Cuốn sách này dẫn dắt bạn đọc
                            qua hành trình tìm hiểu các học thuyết và trường phái đó, về cách các nhà tâm lý diễn giải
                            hành xử và tâm trí con người. Tại sao chúng ta có những hành vi, suy nghĩ và cảm xúc như
                            vậy, chúng diễn ra và kết thúc như thế nào, chúng ảnh hưởng lâu dài, gián đoạn hay ngắn ngủỉ
                            đến đời sống của chúng ta ra sao, làm thế nào để chúng ta thoát khỏi những tác động tiêu cực
                            của chúng? Cuốn sách có cấu trúc khoa học, trình bày dễ hiểu, súc tích, thiết kế và minh họa
                            đẹp mắt này sẽ mang đến cho bạn những hiểu biết về các học thuyết tâm lý và các phương pháp
                            trị liệu, từ các vấn đề cá nhân đến những ứng dụng thực tế. Mã hàng 8935235227699 Tên Nhà
                            Cung Cấp Nhã Nam Tác giả Jo Hemmings Người Dịch Trần Trương Phúc Hạnh, Phương Hoài Nga hiệu
                            đính NXB NXB Thế Giới Năm XB 2020 Trọng lượng (gr) 980 Kích Thước Bao Bì 23 x 19.5 cm Số
                            trang 247 Hình thức Bìa Cứng Sản phẩm hiển thị trong Nhã Nam Tủ Sách Tâm Lý Kỹ Năng Sản phẩm
                            bán chạy nhất Top 100 sản phẩm Tâm lý bán chạy của tháng Giá sản phẩm trên Fahasa.com đã bao
                            gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao
                            hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí
                            hàng cồng kềnh,... MỘT TRONG NHỮNG CUỐN SÁCH MỞ KHÓA HỮU ÍCH NHẤT VỀ TƯ DUY, KÝ ỨC VÀ CẢM
                            XÚC CỦA CON NGƯỜI! Ám sợ là gì, ám sợ có thực sự đáng sợ không? Rối loạn tâm lý là gì, làm
                            thế nào để thoát khỏi tình trạng suy nhược và xáo trộn đó? Trầm cảm là gì, vì sao con người
                            hiện đại thường xuyên gặp và chống chọi với tình trạng u uất, mệt mỏi và tuyệt vọng này? Tìm
                            hiểu về các vấn đề tâm trí của con người luôn đầy sức hấp dẫn và lôi cuốn, vì vậy mà tâm lý
                            học ra đời, hình thành và phát triển rất nhiều các học thuyết và trường phái. Cuốn sách này
                            dẫn dắt bạn đọc qua hành trình tìm hiểu các học thuyết và trường phái đó, về cách các nhà
                            tâm lý diễn giải hành xử và tâm trí con người. Tại sao chúng ta có những hành vi, suy nghĩ
                            và cảm xúc như vậy, chúng diễn ra và kết thúc như thế nào, chúng ảnh hưởng lâu dài, gián
                            đoạn hay ngắn ngủỉ đến đời sống của chúng ta ra sao, làm thế nào để chúng ta thoát khỏi
                            những tác động tiêu cực của chúng?
                        </ReactReadMoreReadLess>
                    </div>
                </div>
            </div>
            <div className={cx('bookdetail-wrapper')}>
                <h2>Đánh giá sản phẩm</h2>
                <div className={cx('feedback-block', 'row')}>
                    <div className={cx('col-2')}>
                        <div className={cx('feedback-point')}>
                            <div style={{ fontSize: '5rem' }}>
                                5<span style={{ fontSize: '3rem' }}>/5</span>
                            </div>
                            <div className={cx('feedback-point-star')}>
                                <div className={cx('star')}>
                                    <FontAwesomeIcon className={cx('color')} icon={faStar} />
                                    <FontAwesomeIcon className={cx('color')} icon={faStar} />
                                    <FontAwesomeIcon className={cx('color')} icon={faStar} />
                                    <FontAwesomeIcon className={cx('color')} icon={faStar} />
                                    <FontAwesomeIcon className={cx('color')} icon={faStar} />
                                </div>
                            </div>
                            <div
                                className={cx('feedback-point-quantity')}
                                style={{ fontSize: '13px', fontWeight: '500' }}
                            >
                                <p>{feedbacks.length} đánh giá</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('feedback-star', 'col-4')}>
                        {stars.map((star) => (
                            <div className={cx('feedback-star-block')}>
                                <span style={{ fontSize: '1.5rem', margin: '0 0.7rem' }}>{star.index} sao </span>
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
                                <span style={{ fontSize: '1.5rem', margin: '0 0.7rem' }}>
                                    {(star.sum / feedbacks.length) * 100}%
                                </span>
                            </div>
                        ))}
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
                    {feedbacks.map((feedback) => (
                        <Comment
                            key={feedback.id}
                            userid={feedback.userId}
                            createat={feedback.createdAt}
                            star={feedback.star}
                            feedback={feedback.comment}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Bookdetail;
