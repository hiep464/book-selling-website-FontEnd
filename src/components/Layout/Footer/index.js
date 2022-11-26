import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faEnvelope, 

} from "@fortawesome/free-solid-svg-icons";

import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
    faPinterest
} from "@fortawesome/free-brands-svg-icons"

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer>
      <div className={cx("block-subscribe")}>
        <div className={cx("block-subscribe-title")}>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <span>ĐĂNG KÝ NHẬN BẢN TIN</span>
        </div>
        <div className={cx("block-input")}>
          <div className={cx("search")}>
            <input
              className={cx("email-input")}
              placeholder="Nhập địa chỉ email của bạn"
            ></input>
          </div>
          <button>Đăng ký</button>
        </div>
      </div>

      <div className={cx("footer-contain")}>
        <div className={cx("footer-left")}>
          <div className={cx("logo")}>
            <span>H3.com</span>
          </div>
          <div className={cx("address")}>
            <span>
              Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCMCông Ty Cổ Phần Phát Hành
              Sách TP HCM - FAHASA60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt
              NamFahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG
              hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất
              cả Hệ Thống Fahasa trên toàn quốc.
            </span>
          </div>
          <div className={cx("media")}>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faPinterest} />
          </div>
        </div>

        <div className={cx("footer-right")}>
          <div className={cx("footer-right-head")}>
            <div className={cx("service")}>
              <ul>
                <li>Điều khoản sử dụng</li>
                <li>Chính sách bảo mật thông tin cá nhân</li>
                <li>Chính sách bảo mật thanh toán</li>
                <li>Giới thiệu Fahasa</li>
                <li>Hệ thống trung tâm - nhà sách</li>
              </ul>
            </div>
            <div className={cx("support")}>
              <ul>
                <li>Chính sách đổi trả - hoàn tiền</li>
                <li>Chính sách bảo hành - bồi hoàn</li>
                <li>Chính sách vận chuyển</li>
                <li>Chính sách khách sỉ</li>
                <li>Phương thức thanh toán và xuất HĐ</li>
              </ul>
            </div>
            <div className={cx("my-account")}>
              <ul>
                <li>Đăng nhập/Tạo mới tài khoản</li>
                <li>Thay đổi địa chỉ khách hàng</li>
                <li>Chi tiết tài khoản</li>
                <li>Lịch sử mua hàng</li>
              </ul>
            </div>
          </div>
          <div className={cx("contact")}>
            <div className={cx("contact-address")}>
              <span>60-62 Lê Lợi, Q.1, TP. HCM</span>
            </div>
            <div className={cx("contact-email")}>
              <span>cskh@fahasa.com.vn</span>
            </div>
            <div className={cx("contact-phone-number")}>
              <span>1900636467</span>
            </div>
          </div>
        </div>
        <div className={cx("message")}>
          Giấy chứng nhận Đăng ký Kinh doanh số 0304132047 do Sở Kế hoạch và Đầu
          tư Thành phố Hồ Chí Minh cấp ngày 20/12/2005, đăng ký thay đổi lần thứ
          10, ngày 20/05/2022.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
