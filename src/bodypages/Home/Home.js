import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.scss';
import { useSelector } from 'react-redux';
import { isLoginSelector } from 'src/redux/selectors';
import ColumnList from '../ColumnList/ColumnList';
import TopPage from '../TopPage/TopPage';
const cx = classNames.bind(styles);

function Home() {
    const loginState = useSelector(isLoginSelector);
    const [login, setLogin] = useState(loginState);

    useEffect(() => {
        setLogin(loginState);
    }, [loginState]);

    return (
        <div className={cx('wrapper-home')} id="home-page">
            {login ? (
                <div className={cx('wrapper-home-loggedin')}>
                    <div className={cx('container login')}>
                        <TopPage />
                    </div>
                </div>
            ) : (
                <div className={cx('wrapper-home-non-login')}>
                    <div className={cx('container non-login')}>
                        <ColumnList />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
