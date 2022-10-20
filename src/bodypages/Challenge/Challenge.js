import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Challenge.scss';
import { useSelector } from 'react-redux';
import { isLoginSelector } from 'src/redux/selectors';

const cx = classNames.bind(styles);

function Challenge() {
    const isLogin = useSelector(isLoginSelector);
    const [login, setLogin] = useState(false);

    useEffect(() => {
        setLogin(isLogin);
    }, [isLogin]);

    return (
        <div className={cx('wrapper-challenge')}>
            {login ? (
                <div className={cx('wrapper-challenge-loggedin')}>
                    <span>Welcome to Health App</span>
                    <span>YOU HAVE CHALLENGES TODAY</span>
                </div>
            ) : (
                <div className={cx('wrapper-challenge-non-login')}>
                    <span>Welcome to Health App</span>
                    <span>You have NOT LOG IN yet!</span>
                    <span>Please Login or Register to take part in CHALLENGES!</span>
                </div>
            )}
        </div>
    );
}

export default Challenge;
