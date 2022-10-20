import classNames from 'classnames/bind';
import styles from './Header.scss';
import { useRef, useState } from 'react';
import config from 'src/config';
import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { isLoginSelector, usernameSelector } from 'src/redux/selectors';
// import { isLogout } from 'src/redux/actions';
import icons from 'src/assets/icons/icons';
// import photos from 'src/assets/photos/photos';
import Menu from 'src/components/Menu/Menu';

const cx = classNames.bind(styles);
// const log = console.log.bind(console);
function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef();
    // const isLogin = useSelector(isLoginSelector);
    // const username = useSelector(usernameSelector);
    // const [login, setLogin] = useState(false);
    // let navigate = useHistory();
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     setLogin(isLogin);
    // }, [isLogin]);

    // const handleLogout = (e) => {
    //     e.preventDefault();
    //     dispatch(isLogout(false));
    // };

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    const handleCloseMenu = () => {
        setOpenMenu(false);
    };
    return (
        <header className={cx('wrapper-header')}>
            {openMenu ? <div onClick={handleCloseMenu} className={cx('overlay')}></div> : ''}
            <div className={cx('container-header')}>
                <Link to={config.routes.home} className={cx('logo-header')}>
                    <img className={cx('navbar-img logo-img')} src={icons.logo} alt="logo" />
                </Link>
                <div className={cx('navbar-header')}>
                    <Link
                        to={config.routes.myRecord}
                        className={cx('navbar-item navbar-record')}
                    >
                        <img
                            className={cx('navbar-img record-img')}
                            src={icons.headerRecord}
                            alt="record"
                        />
                        <span className={cx('navbar-text')}>自分の記録</span>
                    </Link>
                    <Link
                        to={config.routes.challenge}
                        className={cx('navbar-item navbar-challenge')}
                    >
                        <img
                            className={cx('navbar-img challenge-img')}
                            src={icons.headerChallenge}
                            alt="challenge"
                        />
                        <span className={cx('navbar-text')}>チャレンジ</span>
                    </Link>
                    <Link to={config.routes.news} className={cx('navbar-item navbar-news')}>
                        <img
                            className={cx('navbar-img news-img')}
                            src={icons.headerNews}
                            alt="news"
                        />
                        <img className={cx('count-img')} src={icons.headerCount} alt="count" />
                        <span className={cx('navbar-text')}>お知らせ</span>
                    </Link>
                    <div className={cx('navbar-menu')}>
                        <div className={cx('menu-btn')} ref={menuRef} onClick={toggleMenu}>
                            {openMenu ? (
                                <img
                                    className={cx('menu-img')}
                                    src={icons.headerClose}
                                    alt="close"
                                />
                            ) : (
                                <img
                                    className={cx('menu-img')}
                                    src={icons.headerMenu}
                                    alt="menu"
                                />
                            )}
                        </div>

                        <div className={cx('navbar-menu-list')} id="navbar-menu-list">
                            <Menu open={openMenu} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
