import classNames from 'classnames/bind';
import styles from './Courses.scss';

const cx = classNames.bind(styles);

function Courses() {
    return (
        <div className={cx('wrapper-courses')}>
            <div className={cx('wrapper-courses-loggedin')}>
                <span>Welcome to Health App</span>
                <span>YOU HAVE COURSES</span>
            </div>
        </div>
    );
}

export default Courses;
