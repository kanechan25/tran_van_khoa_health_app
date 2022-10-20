import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Setting.scss';
import { useSelector } from 'react-redux';
import { isLoginSelector } from 'src/redux/selectors';
const cx = classNames.bind(styles);

function Setting() {
    const isLogin = useSelector(isLoginSelector);
    const [login, setLogin] = useState(false);

    useEffect(() => {
        setLogin(isLogin);
    }, [isLogin]);
    return (
        <div className={cx('wrapper-setting')}>
            {login ? (
                <div className={cx('wrapper-setting-loggedin')}>
                    <span>Welcome to Health App</span>
                    <span>YOU CAN SETTING HERE!</span>
                </div>
            ) : (
                <div className={cx('wrapper-setting-non-login')}>
                    <span>Welcome to Health App</span>
                    <span>You have NOT LOG IN yet!</span>
                    <span>Please Login or Register to go SETTINGS</span>
                </div>
            )}
        </div>
    );
}

export default Setting;
