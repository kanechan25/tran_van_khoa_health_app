import classNames from 'classnames/bind';
import styles from './Target.scss';

const cx = classNames.bind(styles);

function Target() {
    return (
        <div className={cx('wrapper-target')}>
            <div className={cx('wrapper-target-loggedin')}>
                <span>Welcome to Health App</span>
                <span>YOU HAVE A TARGET NEED TO OVERTAKE</span>
            </div>
        </div>
    );
}

export default Target;
