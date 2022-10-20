import { httpRequest } from '../utils/httpRequest';

//SERVICES THAT ALLOW CALL API HERE, FOR EXAMPLE HERE:

const registerUserService = (registerData) => {
    return httpRequest.post('/register', registerData);
};

const loginUserService = (loginData) => {
    return httpRequest.post('/login', loginData);
};

const getInfoUserService = (email) => {
    return httpRequest.get('/user/info', email);
};

const getUserRecordService = (username) => {
    return httpRequest.get('/user/record', username);
};

export { getInfoUserService, registerUserService, loginUserService, getUserRecordService };
