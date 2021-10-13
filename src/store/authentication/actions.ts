
import * as AuthenticationTypes from './types';
import User from '../../types/User';



export const userAuthentication = ( auth: boolean, token: string ) => {
    return {
        type: AuthenticationTypes.SET_AUTHENTICATION,
        auth,
        token
    }
}

export const tokenAuthentication = ( auth: boolean, user?: User ) => {
    return {
        type: AuthenticationTypes.SET_USER_AUTHENTICATION,
        auth,
        user
    }
}
