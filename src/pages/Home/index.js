import style from './home.module.scss';
import classNames from 'classnames/bind';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Product from './Product';
// import Slider from 'react-slick';
import Login from '../Login';

const cx = classNames.bind(style);

function Home() {
    return (
        <main className={cx('homepage')}>
            <div className={cx('homepage-advertise', 'row', 'container')}>
                <div className={cx('homepage-advertise-left', 'col-md-8')}>
                    <div className={cx('homepage-carousel')}>
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                            <div class="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="0"
                                    class="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                ></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img
                                        src={require('../../assets/images/homepage_imgs/BitexT12_840x320.jpg')}
                                        class="d-block w-100"
                                        alt="..."
                                        className={cx('img-border')}
                                    ></img>
                                </div>
                                <div class="carousel-item">
                                    <img
                                        src={require('../../assets/images/homepage_imgs/Megasale_Mainbanner_T12_Slide_840x320_Icanconnect.jpg')}
                                        class="d-block w-100"
                                        alt="..."
                                        className={cx('img-border')}
                                    ></img>
                                </div>
                                <div class="carousel-item">
                                    <img
                                        src={require('../../assets/images/homepage_imgs/McBooksT12_840x320.jpg')}
                                        class="d-block w-100"
                                        alt="..."
                                        className={cx('img-border')}
                                    ></img>
                                </div>
                            </div>
                            <button
                                class="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev"
                            >
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button
                                class="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next"
                            >
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={cx('homepage-advertise-right', 'col-md-4')}>
                    <div>
                        <div className={cx('advertise-right-img')}>
                            <img
                                className={cx('right-img', 'img-border')}
                                src={require('../../assets/images/homepage_imgs/up-right.jpg')}
                                alt=""
                            ></img>
                        </div>
                        <div className={cx('advertise-right-img')}>
                            <img
                                className={cx('right-img', 'img-border', 'bottom-img')}
                                src={require('../../assets/images/homepage_imgs/bottom-right.png')}
                                alt=""
                            ></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('coupon')}>
                <div>
                    <img src={require('../../assets/images/homepage_imgs/coupon1.png')} alt=""></img>
                </div>
                <div>
                    <img src={require('../../assets/images/homepage_imgs/coupon2.png')} alt=""></img>
                </div>
                <div>
                    <img src={require('../../assets/images/homepage_imgs/coupon3.png')} alt=""></img>
                </div>
                <div>
                    <img src={require('../../assets/images/homepage_imgs/coupon4.png')} alt=""></img>
                </div>
            </div>

            <div className={cx('frame')}>
                <div className={cx('frame-title')}>
                    <FontAwesomeIcon icon={faListUl} className={cx('category-icon')} />
                    <span>Danh mục sản phẩm</span>
                </div>
                <div className={cx('category-lists', 'row')}>
                    <div className={cx('category-item', 'col')}>
                        <a href="#">
                            <img src={require('../../assets/images/categories/foreign-books.png')} alt=""></img>
                            <p>Sách tham khảo</p>
                        </a>
                    </div>
                    <div className={cx('category-item', 'col')}>
                        <a href="#">
                            <img src={require('../../assets/images/categories/foreign-books.png')} alt=""></img>
                            <p>Sách tham khảo</p>
                        </a>
                    </div>
                    <div className={cx('category-item', 'col')}>
                        <a href="#">
                            <img src={require('../../assets/images/categories/foreign-books.png')} alt=""></img>
                            <p>Sách tham khảo</p>
                        </a>
                    </div>
                    <div className={cx('category-item', 'col')}>
                        <a href="#">
                            <img src={require('../../assets/images/categories/foreign-books.png')} alt=""></img>
                            <p>Sách tham khảo</p>
                        </a>
                    </div>
                    <div className={cx('category-item', 'col')}>
                        <a href="#">
                            <img src={require('../../assets/images/categories/foreign-books.png')} alt=""></img>
                            <p>Sách tham khảo</p>
                        </a>
                    </div>
                    <div className={cx('category-item', 'col')}>
                        <a href="#">
                            <img src={require('../../assets/images/categories/foreign-books.png')} alt=""></img>
                            <p>Sách tham khảo</p>
                        </a>
                    </div>
                    <div className={cx('category-item', 'col')}>
                        <a href="#">
                            <img src={require('../../assets/images/categories/foreign-books.png')} alt=""></img>
                            <p>Sách tham khảo</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className={cx('frame')}>
                <div className={cx('product-category-title', 'frame-title')}>
                    <span>Thiếu nhi</span>
                </div>
                <div className={cx('category-product-list')}>
                    <div className={cx('row')}>
                        <div className={cx('advertise', 'col-md-4')}>
                            <img
                                src={require('../../assets/images/advertisements/BannerBlock09_KinhTe_350x415.jpg')}
                                alt=""
                            ></img>
                        </div>
                        <div className={cx('col-md-8')}>
                            <div className={cx('product-list')}>
                                <Product></Product>
                                <Product></Product>
                                <Product></Product>
                                <Product></Product>
                            </div>
                            <div className={cx('more-detail')}>
                                <button type="button" className={cx('more-detail-btn')}>
                                    Xem thêm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Login/>
        </main>
    );
};

export default Home;
