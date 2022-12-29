import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Menu from './Menu';

const cx = classNames.bind(styles);

function ProfileLayout({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Menu/>
            <div className={cx('right')}>{children}</div>
        </div>
     );
}

export default ProfileLayout;