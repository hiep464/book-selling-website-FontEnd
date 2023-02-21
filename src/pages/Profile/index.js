import classNames from 'classnames/bind';
import styles from './profile.module.scss';

const cx = classNames.bind(styles);

function Profile({ children }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('profile-header')}>Thông tin tài khoản</header>
            <div className={cx('profile-body')}>
                <form className={cx('profile-body-form')}>
                    <div className={cx('item')}>
                        <div className={cx('item-name')}>Họ*</div>
                        <input className={cx('item-input-text')} type="text" value="Lưu"></input>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('item-name')}>Tên*</div>
                        <input className={cx('item-input-text')} type="text" value="Hiệp"></input>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('item-name')}>Số điện thoại</div>
                        <input className={cx('item-input-text')} type="text"></input>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('item-name')}>Email</div>
                        <input className={cx('item-input-text')} type="text"></input>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('item-name')}>Giới tính</div>
                        <input id = "profile-input-nam" className={cx('item-input-radio')} name="gioitinh" type="radio"/>
                        <label htmlFor= "profile-input">Nam</label>
                        <input id = "profile-input-nu" className={cx('item-input-radio')} name="gioitinh" type="radio"/>
                        <label htmlFor= "profile-input-nu">Nữ</label>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('item-name')}>Ngày sinh</div>
                        <input className={cx('item-input-text')} type="text"></input>
                    </div>
                    <div className={cx('btn-wrapper')}>
                        <input className={cx('input-submit')} type="submit" value="Lưu thay đổi"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;
