import config from 'src/config/index';

import Home from 'src/bodypages/Home/Home';
import TopPage from 'src/bodypages/TopPage/TopPage';
import MyRecord from 'src/bodypages/MyRecord/MyRecord';
import Challenge from 'src/bodypages/Challenge/Challenge';
import News from 'src/bodypages/News/News';
import ColumnList from 'src/bodypages/ColumnList/ColumnList';
import Courses from 'src/bodypages/Courses/Courses';
import Setting from 'src/bodypages/Setting/Setting';
import Target from 'src/bodypages/Target/Target';
import WeightChart from 'src/bodypages/WeightChart/WeightChart';

export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.topPage, component: TopPage },
    { path: config.routes.myRecord, component: MyRecord },
    { path: config.routes.challenge, component: Challenge },
    { path: config.routes.news, component: News },
    { path: config.routes.weightChart, component: WeightChart },
    { path: config.routes.target, component: Target },
    { path: config.routes.courses, component: Courses },
    { path: config.routes.columnList, component: ColumnList },
    { path: config.routes.setting, component: Setting },
];
