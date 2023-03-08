import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

function Order() {
    return (
        <div>
            <div className={cx('page-header')}>
                <div className={cx('page-title')}>
                    <h1>Đơn hàng của tôi</h1>
                </div>
                <div className={cx('page-table')}>
                    <div className={cx('table-header')}>
                        <div className={cx('header-item')} style={{ borderLeft: '2px solid #e0e0e0' }}>
                            <p>2</p>
                            <span>Tất cả</span>
                        </div>
                        <div className={cx('header-item')}>
                            <p>2</p>
                            <span>Chờ thanh toán</span>
                        </div>
                        <div className={cx('header-item')}>
                            <p>2</p>
                            <span>Xác nhận</span>
                        </div>
                        <div className={cx('header-item')}>
                            <p>2</p>
                            <span>Đang xử lý</span>
                        </div>
                        <div className={cx('header-item')} style={{ borderRight: '2px solid #e0e0e0' }}>
                            <p>2</p>
                            <span>Hoàn tất</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('page-item')}>
                <table className={cx('table', 'table-hover')} style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th scope="col">Mã đơn hàng</th>
                            <th scope="col">Ngày mua</th>
                            <th scope="col">Người nhận</th>
                            <th scope="col">Tổng tiền</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>200000337</th>
                            <th>16/10/2017</th>
                            <th>Hà Lê</th>
                            <th>224.250 đ</th>
                            <th>Bị hủy</th>
                            <th>
                                <a>Xem chi tiết</a>
                            </th>
                        </tr>
                        <tr>
                            <th>200000337</th>
                            <th>16/10/2017</th>
                            <th>Hà Lê</th>
                            <th>224.250 đ</th>
                            <th>Bị hủy</th>
                            <th>
                                <a>Xem chi tiết</a>
                            </th>
                        </tr>
                        <tr>
                            <th>200000337</th>
                            <th>16/10/2017</th>
                            <th>Hà Lê</th>
                            <th>224.250 đ</th>
                            <th>Bị hủy</th>
                            <th>
                                <a>Xem chi tiết</a>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Order;
