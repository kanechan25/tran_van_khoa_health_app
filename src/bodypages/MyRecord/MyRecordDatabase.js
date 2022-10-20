const NavRecord = [
    {
        img: require('src/assets/photos/MyRecommend-1.jpg'),
        textEn: 'BODY RECORD',
        textJp: '自分のカラダの記録',
    },
    {
        img: require('src/assets/photos/MyRecommend-2.jpg'),
        textEn: 'MY EXERCISE',
        textJp: '自分の運動の記録',
    },
    {
        img: require('src/assets/photos/MyRecommend-3.jpg'),
        textEn: 'MY DIARY',
        textJp: '自分の運動の記録',
    },
];

const aDiary = {
    date: '2021.05.21',
    time: '23:25',
    headline: '私の日記の記録が一部表示されます。',
    content:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
};
const MyDiary = [];
for (let i = 0; i < 8; ++i) {
    MyDiary.push(aDiary);
}

const anExercise = {
    exersice: '家事全般（立位・軽い)',
    kcal: '26kcal',
    time: '10 min',
};

const MyExcercise = [];
for (let i = 0; i < 12; ++i) {
    MyExcercise.push(anExercise);
}

export { NavRecord, MyDiary, MyExcercise };
