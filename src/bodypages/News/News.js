import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './News.scss';
import { useSelector } from 'react-redux';
import { isLoginSelector } from 'src/redux/selectors';

const cx = classNames.bind(styles);

function News() {
    const isLogin = useSelector(isLoginSelector);
    const [login, setLogin] = useState(false);

    useEffect(() => {
        setLogin(isLogin);
    }, [isLogin]);

    return (
        <div className={cx('wrapper-news')}>
            {login ? (
                <div className={cx('wrapper-news-loggedin')}>
                    <span>Welcome to Health App</span>
                    <span>YOU HAVE SOME NEWS TODAY</span>
                </div>
            ) : (
                <div className={cx('wrapper-news-non-login')}>
                    <span>Welcome to Health App</span>
                    <span>You have NOT LOG IN yet!</span>
                    <span>Please Login or Register to read NEWS!</span>
                </div>
            )}
        </div>
    );
}

export default News;
