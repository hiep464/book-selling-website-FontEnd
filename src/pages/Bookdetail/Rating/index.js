/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './comment.module.scss';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Rating(props) {
    const { rating } = props;
    const cx = classNames.bind(style);
    return (
        <div className={cx('star')}>
            {new Array(Number.parseInt(rating)).fill(1).map((_, i) => (
                <FontAwesomeIcon key={i} className={cx('color')} icon={faStar} />
            ))}
        </div>
    );
}
