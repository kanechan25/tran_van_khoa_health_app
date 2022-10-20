export const isLogin = (isLogin) => {
    return {
        type: 'user/ISLOGIN',
        payload: isLogin,
    };
};
