import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCartShopping,
  faLanguage,
  faList,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <span>H3.com</span>
        </div>
        <div className={cx("menu")}>
          <Link to="/categories">
            <FontAwesomeIcon className={cx("menu-icon")} icon={faList} />
          </Link>
        </div>
        <div className={cx("search")}>
          <input
            className={cx("search-input")}
            placeholder="Tim kiếm sản phẩm mong muốn..."
          ></input>
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className={cx("action")}>
          <div className={cx("notification","common")}>
            <FontAwesomeIcon icon={faBell} />
            <span>Thông báo</span>
          </div>
          <div className={cx("cart","common")}>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>Giỏ hàng</span>
          </div>
          <div className={cx("account","common")}>
            <FontAwesomeIcon icon={faUser} />
            <span>Tài khoản</span>
          </div>
          <div className={cx("region")}>
            <FontAwesomeIcon icon={faLanguage} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
