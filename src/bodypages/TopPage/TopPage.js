import classNames from 'classnames/bind';
import styles from './TopPage.scss';
import { useState } from 'react';
import { MealItems, InputItems, MealMoreItems } from 'src/bodypages/TopPage/TopPageDatabase';
import icons from 'src/assets/icons/icons';
import photos from 'src/assets/photos/photos';

const cx = classNames.bind(styles);

function TopPage() {
    const [seeMore, setSeeMore] = useState(false);
    const handleSeeMore = () => {
        setSeeMore(!seeMore);
    };
    return (
        <>
            <div className={cx('toppage-list')}>
                <div className={cx('row banner')}>
                    <div className={cx('target')}>
                        <img className={cx('target-img')} src={photos.d01} alt="target" />
                        <div className={cx('target-percent')}>
                            <img
                                className={cx('target-circle-img')}
                                src={icons.topCircle}
                                alt="percent"
                            />
                            <div className={cx('target-rate')}>
                                <span className={cx('rate-num')}>05/21</span>
                                <span className={cx('rate-percent')}>75%</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('graph')}>
                        <img className={cx('graph-img')} src={icons.topGraph} alt="graph" />
                    </div>
                </div>
                <div className={cx('row hexa')}>
                    {InputItems.map((item, index) => (
                        <div key={index} className={cx('input')}>
                            <img className={cx('input-img')} src={item.img} alt="eat" />
                            <span className={cx('input-text')}>{item.content}</span>
                        </div>
                    ))}
                </div>
                <div className={cx('row content-grid')}>
                    {MealItems.map((item, index) => (
                        <div key={index} className={cx('content-column')}>
                            <div className={cx('meal')}>
                                <img className={cx('meal-img')} src={item.img} alt="meal" />
                                <span className={cx('meal-date')}>{item.content}</span>
                            </div>
                        </div>
                    ))}
                    {seeMore &&
                        MealMoreItems.map((item, index) => (
                            <div key={index} className={cx('content-column')}>
                                <div className={cx('meal')}>
                                    <img className={cx('meal-img')} src={item.img} alt="meal" />
                                    <span className={cx('meal-date')}>{item.content}</span>
                                </div>
                            </div>
                        ))}
                </div>
                <div className={cx('see-more')}>
                    <button onClick={handleSeeMore} className={cx('see-more-btn')}>
                        記録をもっと見る
                    </button>
                </div>
                <div className={cx('scroll-top-page')}>
                    <img className={cx('scroll-img')} src={icons.scroll} alt="scroll" />
                </div>
            </div>
        </>
    );
}

export default TopPage;
