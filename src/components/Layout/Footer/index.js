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
          <div className={cx("media-list")}>
            <FontAwesomeIcon className={cx("media")} icon={faFacebook} />
            <FontAwesomeIcon className={cx("media")} icon={faInstagram} />
            <FontAwesomeIcon className={cx("media")} icon={faYoutube} />
            <FontAwesomeIcon className={cx("media")} icon={faTwitter} />
            <FontAwesomeIcon className={cx("media")} icon={faPinterest} />
          </div>
        </div>

        <div className={cx("footer-right")}>
          <div className={cx("footer-right-head")}>
            <div className={cx("service sub-contain")}>
              <div  className={cx("sub-title")}>DỊCH VỤ</div>
              <ul className={cx("list")}>
                <li>Điều khoản sử dụng</li>
                <li>Chính sách bảo mật thông tin cá nhân</li>
                <li>Chính sách bảo mật thanh toán</li>
                <li>Giới thiệu Fahasa</li>
                <li>Hệ thống trung tâm - nhà sách</li>
              </ul>
            </div>
            <div className={cx("support sub-contain")}>
            <div  className={cx("sub-title")}>HỖ TRỢ</div>
              <ul className={cx("list")}>
                <li>Chính sách đổi trả - hoàn tiền</li>
                <li>Chính sách bảo hành - bồi hoàn</li>
                <li>Chính sách vận chuyển</li>
                <li>Chính sách khách sỉ</li>
                <li>Phương thức thanh toán và xuất HĐ</li>
              </ul>
            </div>
            <div className={cx("my-account sub-contain")}>
            <div  className={cx("sub-title")}>TÀI KHOẢN CỦA TÔI</div>
              <ul className={cx("list")}>
                <li>Đăng nhập/Tạo mới tài khoản</li>
                <li>Thay đổi địa chỉ khách hàng</li>
                <li>Chi tiết tài khoản</li>
                <li>Lịch sử mua hàng</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
