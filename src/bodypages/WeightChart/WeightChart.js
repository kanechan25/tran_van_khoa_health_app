import classNames from 'classnames/bind';
import styles from './WeightChart.scss';

const cx = classNames.bind(styles);

function WeightChart() {
    return (
        <div className={cx('wrapper-weight-chart')}>
            <div className={cx('wrapper-weight-chart-loggedin')}>
                <span>Welcome to Health App</span>
                <span>YOU HAVE A WEIGHT CHART</span>
            </div>
        </div>
    );
}

export default WeightChart;
