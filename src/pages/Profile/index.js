import classNames from 'classnames/bind';
import styles from './profile.module.scss';
import { useGetProfile } from '../../api/useAuth';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const cx = classNames.bind(styles);

/*
email
gender
id
name
password
phone
role
updatedAt
*/

function Profile({ children }) {
    const { state } = useContext(AuthContext);
    const { userId, isLogin } = state;

    const [profile, setProfile] = useState({
        email: '',
        gender: true,
        name: '',
        phone: '',
    });

    const user = useGetProfile(userId);
    useEffect(() => {
        if (user) setProfile(user);
    }, [profile, user]);

    if (!isLogin) return <div>Not login</div>;

    return (
        <div className={cx('wrapper')}>
            <header className={cx('profile-header')}>Thông tin tài khoản</header>
            <div className={cx('profile-body')}>
                <form className={cx('profile-body-form')}>
                    {/* <div className={cx('item')}>
                        <div className={cx('item-name')}>Họ*</div>
                        <input className={cx('item-input-text')} type="text" value="Lưu"></input>
                    </div> */}
                    <div className={cx('item')}>
                        <div className={cx('item-name')}>Tên*</div>
                        <input className={cx('item-input-text')} type="text" value={profile?.name}></input>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('item-name')}>Số điện thoại</div>
                        <input className={cx('item-input-text')} type="text" value={profile?.phone}></input>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('item-name')}>Email</div>
                        <input className={cx('item-input-text')} type="text" value={profile?.email}></input>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('item-name')}>Giới tính</div>
                        <input
                            id="profile-input-nam"
                            className={cx('item-input-radio')}
                            name="gioitinh"
                            type="radio"
                            value={profile?.gender}
                        />
                        <label htmlFor="profile-input">Nam</label>
                        <input
                            id="profile-input-nu"
                            className={cx('item-input-radio')}
                            name="gioitinh"
                            type="radio"
                            value={!profile?.gender}
                        />
                        <label htmlFor="profile-input-nu">Nữ</label>
                    </div>
                    {/* <div className={cx('item')}>
                        <div className={cx('item-name')}>Ngày sinh</div>
                        <input className={cx('item-input-text')} type="text"></input>
                    </div> */}
                    <div className={cx('btn-wrapper')}>
                        <input className={cx('input-submit')} type="submit" value="Lưu thay đổi" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;
