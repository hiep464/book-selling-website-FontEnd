import { Fragment, useCallback, useContext, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowTrendUp,
    faBell,
    faCartShopping,
    faList,
    faLock,
    faSearch,
    faUser,
    faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import LoginItem from '../../../pages/Login/LoginItem';
import HeaderProfile from './HeaderProfile';
import HeaderRegister from './HeaderRegister';
import { AuthContext } from '../../../context/AuthContext';
import HeaderSearchResult from './HeaderSearchResult';
import { useSearchBook } from '../../../api/useBook';

const cx = classNames.bind(styles);

function HeaderSearch() {
    const [showTippy, setShowTippy] = useState(false);

    const [title, setTitle] = useState('');
    const searchBookResult = useSearchBook(title || '');
    const books = searchBookResult?.data;

    return (
        <HeadlessTippy
            interactive={true}
            placement="auto-start"
            visible={showTippy}
            render={(attrs) => (
                <HeaderSearchResult attrs={attrs} books={books || []} onClickOutside={() => setShowTippy(false)} />
            )}
            onClickOutside={() => setShowTippy(false)}
        >
            <div className={cx('search')}>
                <input
                    className={cx('search-input')}
                    placeholder="Tim kiếm sản phẩm mong muốn..."
                    onFocus={() => setShowTippy(true)}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                <button>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default HeaderSearch;
