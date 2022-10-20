import classNames from 'classnames/bind';
import styles from './Footer.scss';
import config from 'src/config';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
// const log = console.log.bind(console);
function Footer() {
    return (
        <footer className={cx('wrapper-footer')}>
            <div className={cx('container-footer')}>
                <div className={cx('list-footer')}>
                    <Link to={config.routes.register}>
                        <span className={cx('footer-item')}>会員登録</span>
                    </Link>
                    <Link to={config.routes.company}>
                        <span className={cx('footer-item')}>運営会社</span>
                    </Link>
                    <Link to={config.routes.termsOfServices}>
                        <span className={cx('footer-item')}>利用規約</span>
                    </Link>
                    <Link to={config.routes.info}>
                        <span className={cx('footer-item')}>個人情報の取扱について</span>
                    </Link>
                    <Link to={config.routes.notation}>
                        <span className={cx('footer-item')}>特定商取引法に基づく表記</span>
                    </Link>
                    <Link to={config.routes.inquiry}>
                        <span className={cx('footer-item')}>お問い合わせ</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
