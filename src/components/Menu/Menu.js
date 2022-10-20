import classNames from 'classnames/bind';
import styles from './Menu.scss';
import { Link } from 'react-router-dom';
import config from 'src/config';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isLoginSelector } from 'src/redux/selectors';
import { isLogin } from 'src/redux/actions';

const cx = classNames.bind(styles);
// const log = console.log.bind(console);

function Menu({ open }) {
    const loginState = useSelector(isLoginSelector);
    const [login, setLogin] = useState(loginState);
    const dispatch = useDispatch();
    let history = useHistory();

    const handleLogin = () => {
        dispatch(isLogin(true));
        setLogin(true);
        history.push('/');
    };
    const handleLogout = () => {
        dispatch(isLogin(false));
        setLogin(false);
        history.push('/');
    };

    if (open) {
        return (
            <div className={cx('wrapper-menu')}>
                {login ? (
                    <div className={cx('wrapper-menu-loggedin')}>
                        <div className={cx('container-menu')}>
                            <div className={cx('list-menu')}>
                                <Link to={config.routes.myRecord}>
                                    <span className={cx('menu-item')}>自分の記録</span>
                                </Link>
                                <Link to={config.routes.weightChart}>
                                    <span className={cx('menu-item')}>体重グラフ</span>
                                </Link>
                                <Link to={config.routes.target}>
                                    <span className={cx('menu-item')}>目標</span>
                                </Link>
                                <Link to={config.routes.courses}>
                                    <span className={cx('menu-item')}>選択中のコース</span>
                                </Link>
                                <Link to={config.routes.columnList}>
                                    <span className={cx('menu-item')}>コラム一覧</span>
                                </Link>

                                <span onClick={handleLogout} className={cx('menu-item logout')}>
                                    ログアウト
                                </span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={cx('wrapper-menu-non-login')}>
                        <div className={cx('container-menu')}>
                            <div className={cx('list-menu')}>
                                <span onClick={handleLogin} className={cx('menu-item login')}>
                                    ログインする
                                </span>
                                <Link to={config.routes.setting}>
                                    <span className={cx('menu-item')}>設定</span>
                                </Link>
                                <Link to={config.routes.news}>
                                    <span className={cx('menu-item')}>ニュース</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    } else return '';
}

export default Menu;
