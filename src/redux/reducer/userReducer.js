const initState = {
    isLogin: false,
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'user/ISLOGIN':
            return {
                ...state,
                isLogin: action.payload,
            };

        default:
            return state;
    }
};
export default userReducer;
