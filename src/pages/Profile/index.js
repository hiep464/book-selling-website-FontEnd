import classNames from 'classnames/bind';
import styles from './profile.module.scss';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useGetProfile, useUpdateProfile } from '../../api/useUser';

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
        gender: 'MALE',
        name: '',
        phone: '',
    });

    const user = useGetProfile(userId);
    useEffect(() => {
        if (user) setProfile(user);
    }, [user]);

    const { mutate: updateProfile } = useUpdateProfile(userId, {});

    if (!isLogin) return <div>Not login</div>;

    const handleNameChange = (e) => setProfile((state) => ({ ...state, name: e.target.value }));
    const handlePhoneChange = (e) => setProfile((state) => ({ ...state, phone: e.target.value }));
    const handleEmailChange = (e) => setProfile((state) => ({ ...state, email: e.target.value }));

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
                        <input
                            className={cx('item-input-text')}
                            type="text"
                            value={profile?.name}
                            onChange={handleNameChange}
                        ></input>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('item-name')}>Số điện thoại</div>
                        <input
                            className={cx('item-input-text')}
                            type="text"
                            value={profile?.phone}
                            onChange={handlePhoneChange}
                        ></input>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('item-name')}>Email</div>
                        <input
                            className={cx('item-input-text')}
                            type="text"
                            value={profile?.email}
                            onChange={handleEmailChange}
                        ></input>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('item-name')}>Giới tính</div>
                        <input
                            id="profile-input-nam"
                            className={cx('item-input-radio')}
                            name="gioitinh"
                            type="radio"
                            // defaultChecked={profile?.gender}
                            checked={profile?.gender === 'MALE'}
                            onClick={(e) => {
                                setProfile((p) => ({ ...p, gender: 'MALE' }));
                            }}
                        />
                        <label htmlFor="profile-input">Nam</label>
                        <input
                            id="profile-input-nu"
                            className={cx('item-input-radio')}
                            name="gioitinh"
                            type="radio"
                            // defaultChecked={!profile?.gender}
                            checked={profile?.gender === 'FEMALE'}
                            onClick={(e) => {
                                setProfile((p) => ({ ...p, gender: 'FEMALE' }));
                            }}
                        />
                        <label htmlFor="profile-input-nu">Nữ</label>
                    </div>
                    {/* <div className={cx('item')}>
                        <div className={cx('item-name')}>Ngày sinh</div>
                        <input className={cx('item-input-text')} type="text"></input>
                    </div> */}
                    <div className={cx('btn-wrapper')}>
                        <input
                            className={cx('input-submit')}
                            type="submit"
                            value="Lưu thay đổi"
                            onClick={(e) => {
                                e.preventDefault();
                                updateProfile(profile);
                            }}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;
