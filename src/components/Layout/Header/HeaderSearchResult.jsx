import React, { useCallback } from 'react';
import classNames from 'classnames';
import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const HeaderSearchResult = ({ attrs, books, onClickOutside }) => {
    return (
        <div
            className={cx('search-result')}
            {...attrs}
            style={{
                backgroundColor: 'white',
                width: 800,
                height: 264,
                borderRadius: 12,
                boxShadow: '8px 8px 16px 8px rgba(0, 0, 0, 0.1)',
                padding: 16,
                margin: 6,
                transform: 'translateX(-10%)',
                // display: 'flex',
                // flexDirection: 'row',
                // justifyContent: 'space-between',
                // alignItems: 'flex-start',
                // flexWrap: 'wrap',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
            }}
        >
            {books?.slice(0, 6).map((book) => (
                <HeaderSearchItem {...book} onClickOutside={onClickOutside} />
            ))}
        </div>
    );
};

function HeaderSearchItem(props) {
    const { title, coverUrl, author, category, id, onClickOutside } = props;

    const navigate = useNavigate();
    const handleClick = useCallback(
        (e) => {
            e.preventDefault();
            onClickOutside();
            console.log('object');
            navigate(`/bookdetail/${id}`);
        },
        [id, navigate],
    );

    return (
        <div
            className={cx('search-result1-item', 'hover-gray')}
            style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#eee',
                width: 248,
                borderRadius: 8,
                padding: 4,
                height: 104,
                pointerEvents: 'auto',
            }}
            onClick={handleClick}
        >
            <img src={coverUrl} style={{ width: 64, height: 96, borderRadius: 8 }} />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginLeft: 16,
                    marginTop: 8,
                    marginBottom: 8,
                }}
            >
                <h3
                    style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                    }}
                >
                    {title}
                </h3>
                <div>
                    <h4 style={{ color: 'gray', fontSize: 13 }}>{author}</h4>
                    <h4 style={{ color: 'gray', fontSize: 13 }}>{category}</h4>
                </div>
            </div>
        </div>
    );
}

HeaderSearchItem.defaultProps = {
    title: 'Title',
    coverUrl: 'https://picsum.photos/200/300',
    category: 'Category',
    author: 'Author',
};

export default HeaderSearchResult;
