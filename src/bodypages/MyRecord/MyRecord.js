import classNames from 'classnames/bind';
import styles from './MyRecord.scss';
import { useState } from 'react';
import { NavRecord, MyDiary, MyExcercise } from './MyRecordDatabase';
import icons from 'src/assets/icons/icons';

const cx = classNames.bind(styles);

function MyRecord() {
    const [seeMore, setSeeMore] = useState(false);
    const handleSeeMore = () => {
        setSeeMore(!seeMore);
    };

    return (
        <>
            <div className={cx('wrapper-my-record')}>
                <div className={cx('row nav-record')}>
                    {NavRecord.map((item, index) => (
                        <div key={index} className={cx('nav-item')}>
                            <div className={cx('frame-blur')}></div>
                            <div className={cx('frame-img')}></div>
                            <img className={cx('input-img')} src={item.img} alt="record" />
                            <div className={cx('input-text')}>
                                <span className={cx('input-text-en')}>{item.textEn}</span>
                                <span className={cx('input-text-jp')}>{item.textJp}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cx('row table body-record')}>
                    <div className={cx('headline')}>
                        <span className={cx('table-name')}>BODY RECORD</span>
                        <span className={cx('table-date')}>2021.05.21</span>
                    </div>
                    <div className={cx('body-chart')}>
                        <img className={cx('body-chart-img')} src={icons.bodyRecord} alt="body" />
                    </div>
                    <div className={cx('body-filter')}>
                        <button className={cx('body-filter-btn')}>日</button>
                        <button className={cx('body-filter-btn')}>週</button>
                        <button className={cx('body-filter-btn')}>月</button>
                        <button className={cx('body-filter-btn active')}>年</button>
                    </div>
                </div>
                <div className={cx('row table my-exercise')}>
                    <div className={cx('headline')}>
                        <span className={cx('table-name')}>MY EXERCISE</span>
                        <span className={cx('table-date')}>2021.05.21</span>
                    </div>
                    <div className={cx('exercise-wrap')}>
                        <div className={cx('exercise-container')}>
                            <div className={cx('exercise-column')}>
                                {MyExcercise.map((item, index) => (
                                    <div key={index} className={cx('activity-list')}>
                                        <div className={cx('exercise-activity')}>
                                            <span className={cx('activity')}>
                                                <span className={cx('bullet')}>&#8226;</span>
                                                {item.exersice}
                                            </span>
                                            <span className={cx('kcal')}>{item.kcal}</span>
                                        </div>
                                        <span className={cx('time')}>{item.time}</span>
                                    </div>
                                ))}
                            </div>
                            <div className={cx('exercise-column')}>
                                {MyExcercise.map((item, index) => (
                                    <div key={index} className={cx('activity-list')}>
                                        <div className={cx('exercise-activity')}>
                                            <span className={cx('activity')}>
                                                <span className={cx('bullet')}>&#8226;</span>
                                                {item.exersice}
                                            </span>
                                            <span className={cx('kcal')}>{item.kcal}</span>
                                        </div>
                                        <span className={cx('time')}>{item.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('row my-diary')}>
                    <span className={cx('my-diary-headline')}>MY DIARY</span>
                    <div className={cx('my-diary-list')}>
                        {MyDiary.map((item, index) => (
                            <div key={index} className={cx('content-column')}>
                                <div className={cx('time-diary')}>
                                    <span className={cx('time-date')}>{item.date}</span>
                                    <span className={cx('time-clock')}>{item.time}</span>
                                </div>
                                <div className={cx('headline-diary')}>{item.headline}</div>
                                <div className={cx('content-diary')}>{item.content}</div>
                            </div>
                        ))}
                        {seeMore &&
                            MyDiary.map((item, index) => (
                                <div key={index} className={cx('content-column')}>
                                    <div className={cx('time-diary')}>
                                        <span className={cx('time-date')}>{item.date}</span>
                                        <span className={cx('time-clock')}>{item.time}</span>
                                    </div>
                                    <div className={cx('headline-diary')}>{item.headline}</div>
                                    <div className={cx('content-diary')}>{item.content}</div>
                                </div>
                            ))}
                    </div>
                </div>
                <div onClick={handleSeeMore} className={cx('see-more-diary')}>
                    <button onClick={handleSeeMore} className={cx('see-more-btn')}>
                        記録をもっと見る
                    </button>
                </div>
                <div className={cx('scroll-my-record')}>
                    <img className={cx('scroll-img')} src={icons.scroll} alt="scroll" />
                </div>
            </div>
        </>
    );
}

export default MyRecord;
