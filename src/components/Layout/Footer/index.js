import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
    faPinterest,
    faPhoenixFramework,
} from '@fortawesome/free-brands-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer>
            <div className={cx('footer-contain-block')}>
                <div className={cx('announce-subcribe', 'row', 'container')}>
                    {/* <div className={cx('announce-subcribe-left', 'col-lg-4')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <div className={cx('announce-subcribe-title')}>đăng ký nhận bản tin</div>
                    </div>
                    <div className={cx('announce-subcribe-right', 'col-lg-6')}>
                        <input
                            placeholder="Nhập địa chỉ email của bạn"
                            className={cx('announce-subcribe-input')}
                        ></input>
                        <button className={cx('announce-subcribe-btn')}>Đăng ký</button>
                    </div> */}
                </div>

                <div className={cx('footer-content', 'container')}>
                    <div className={cx('footer-content-main', 'row')}>
                        <div className={cx('col-md-3', 'content-part-1')}>
                            <div className={cx('footer-content-title')}>
                                <h1>H3.com</h1>
                            </div>
                            <div className={cx('footer-content-intro')}>
                                Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCMCông Ty Cổ Phần Phát Hành Sách TP HCM -
                                FAHASA60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam <br></br> Fahasa.com nhận đặt hàng trực
                                tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng
                                cũng như tất cả Hệ Thống Fahasa trên toàn quốc.
                            </div>
                            <div className={cx('certificate-img')}>
                                <img
                                    src={require('../../../assets/images/logo-bo-cong-thuong-da-thong-bao1.png')}
                                    alt=""
                                ></img>
                            </div>
                            <div className={cx('footer-social')}>
                                <ul className={cx('social-list')}>
                                    <li className={cx('social')}>
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </li>
                                    <li className={cx('social')}>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </li>
                                    <li className={cx('social')}>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </li>
                                    <li className={cx('social')}>
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </li>
                                    <li className={cx('social')}>
                                        <FontAwesomeIcon icon={faPinterest} />
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={cx('col-md-9', 'content-part-2')}>
                            <div className={cx('footer-info', 'row')}>
                                <div className={cx('info-part-content', 'col-4')}>
                                    <h5 className={cx('info-title')}>dịch vụ</h5>
                                    <ul className={cx('info-list')}>
                                        <li className={cx('info-detail')}>
                                            <a href="#">Điều khoản sử dụng</a>
                                        </li>
                                        <li className={cx('info-detail')}>
                                            <a href="#">Chính sách bảo mật thông tin cá nhân</a>
                                        </li>
                                        <li className={cx('info-detail')}>
                                            <a href="#">Giới thiệu Fahasa</a>
                                        </li>
                                        <li className={cx('info-detail')}>
                                            <a href="#">Chính sách bảo mật thanh toán</a>
                                        </li>
                                        <li className={cx('info-detail')}>
                                            <a href="#">Hệ thống trung tâm - nhà sách</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className={cx('info-part-content', 'col-4')}>
                                    <h5 className={cx('info-title')}>hỗ trợ</h5>
                                    <ul className={cx('info-list')}>
                                        <li className={cx('info-detail')}>
                                            <a href="#">Chính sách đổi - trả - hoàn tiền</a>
                                        </li>
                                        <li className={cx('info-detail')}>
                                            <a href="#">Chính sách bảo hành - bồi hoàn</a>
                                        </li>
                                        <li className={cx('info-detail')}>
                                            <a href="#">Chính sách vận chuyển</a>
                                        </li>
                                        <li className={cx('info-detail')}>
                                            <a href="#">Chính sách khách sỉ</a>
                                        </li>
                                        <li className={cx('info-detail')}>
                                            <a href="#">Phương thức thanh toán và xuất HĐ</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className={cx('info-part-content', 'col-4')}>
                                    <h5 className={cx('info-title')}>tài khoản của tôi</h5>
                                    <ul className={cx('info-list')}>
                                        <li className={cx('info-detail')}>
                                            <a href="#">Đăng nhập/Tạo mới tài khoản</a>
                                        </li>
                                        <li className={cx('info-detail')}>
                                            <a href="#">Thay đổi địa chỉ khách hàng</a>
                                        </li>
                                        <li className={cx('info-detail')}>
                                            <a href="#">Chi tiết tài khoản</a>
                                        </li>
                                        <li className={cx('info-detail')}>
                                            <a href="#">Lịch sử mua hàng</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={cx('footer-contact')}>
                                <h5 className={cx('info-title')}>Liên hệ</h5>
                                <ul className={cx('contact-list', 'row')}>
                                    <li className={cx('contact-detail', 'col-4')}>
                                        <FontAwesomeIcon icon={faLocation} />
                                        <span className={cx('contact-detail-info')}>60-62 Lê Lợi, Q.1, TP. HCM</span>
                                    </li>
                                    <li className={cx('contact-detail', 'col-4')}>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <span className={cx('contact-detail-info')}>cskh@fahasa.com.vn</span>
                                    </li>
                                    <li className={cx('contact-detail', 'col-4')}>
                                        <FontAwesomeIcon icon={faPhone} />
                                        <span className={cx('contact-detail-info')}>1900636467</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={cx('footer-delivery-img', 'row')}>
                                <div className={cx('delivery-img', 'col-3')}>
                                    <img src={require('../../../assets/images/ahamove_logo3.png')}></img>
                                </div>
                                <div className={cx('delivery-img', 'col-3')}>
                                    <img src={require('../../../assets/images/icon_giao_hang_nhanh1.png')}></img>
                                </div>
                                <div className={cx('delivery-img', 'col-3')}>
                                    <img src={require('../../../assets/images/vnpost1.png')}></img>
                                </div>
                                <div className={cx('delivery-img', 'col-3')}>
                                    <img src={require('../../../assets/images/icon_snappy1.png')}></img>
                                </div>
                            </div>
                            <div className={cx('footer-transition-img', 'row')}>
                                <div className={cx('transition-img', 'col-3', 'moca-img')}>
                                    <img src={require('../../../assets/images/logo_moca_120.jpg')}></img>
                                </div>
                                <div className={cx('transition-img', 'col-3', 'momo-img')}>
                                    <img src={require('../../../assets/images/momopay.png')}></img>
                                </div>
                                <div className={cx('transition-img', 'col-3')}>
                                    <img src={require('../../../assets/images/shopeepay_logo1.png')}></img>
                                </div>
                                <div className={cx('transition-img', 'col-3')}>
                                    <img src={require('../../../assets/images/ZaloPay-logo-130x83.png')}></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('footer-content-bottom', 'row')}>
                        <p>
                            Giấy chứng nhận Đăng ký Kinh doanh số 0304132047 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí
                            Minh cấp ngày 20/12/2005, đăng ký thay đổi lần thứ 10, ngày 20/05/2022.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
