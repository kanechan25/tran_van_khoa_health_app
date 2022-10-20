import classNames from 'classnames/bind';
import styles from './ColumnList.scss';
import { useState } from 'react';

import { recommended, columnItems, columnMoreItems } from './ColumnDatabase';
import icons from 'src/assets/icons/icons';

const cx = classNames.bind(styles);

function ColumnList() {
    const [seeMore, setSeeMore] = useState(false);
    const handleSeeMore = () => {
        setSeeMore(!seeMore);
    };
    return (
        <>
            <div className={cx('column-list')}>
                <div className={cx('row recommended-grid')}>
                    {recommended.map((item, index) => (
                        <div key={index} className={cx('grid-item')}>
                            <div className={cx('headline')}>
                                <span className={cx('text-en')}>{item.textEn}</span>
                            </div>
                            <div className={cx('divider')}></div>
                            <div className={cx('text-category')}>
                                <span className={cx('text-jp')}>{item.textJp}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cx('row content-grid')}>
                    {columnItems.map((item, index) => (
                        <div key={index} className={cx('content-column')}>
                            <div className={cx('mask')}>
                                <img className={cx('mask-img')} src={item.img} alt="mask" />
                                <span className={cx('mask-date')}>{item.date}</span>
                            </div>
                            <div className={cx('content-text')}>{item.content}</div>
                            <div className={cx('hashtag')}>{item.hashtag}</div>
                        </div>
                    ))}
                    {seeMore &&
                        columnMoreItems.map((item, index) => (
                            <div key={index} className={cx('content-column')}>
                                <div className={cx('mask')}>
                                    <img className={cx('mask-img')} src={item.img} alt="mask" />
                                    <span className={cx('mask-date')}>{item.date}</span>
                                </div>
                                <div className={cx('content-text')}>{item.content}</div>
                                <div className={cx('hashtag')}>{item.hashtag}</div>
                            </div>
                        ))}
                </div>
                <div className={cx('see-more')}>
                    <button onClick={handleSeeMore} className={cx('see-more-btn')}>
                        コラムをもっと見る
                    </button>
                </div>
                <div className={cx('scroll-column-page')}>
                    <img className={cx('scroll-img')} src={icons.scroll} alt="scroll" />
                </div>
            </div>
        </>
    );
}

export default ColumnList;
