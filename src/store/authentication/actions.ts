
import * as AuthenticationTypes from './types';



export const userAuthentication = ( auth: boolean, token: string ) => ({
    type: AuthenticationTypes.SET_AUTHENTICATION,
    auth,
    token
});

export const tokenAuthentication = ( auth: boolean ) => ({
    type: AuthenticationTypes.SET_USER_AUTHENTICATION,
    auth
});

export const signOutAuthentication = () => ({
    type: AuthenticationTypes.SIGNOUT_AUTHENTICATION,
    auth: false, 
    token: ''   
});

export const setLoadingAuthentication = ( loading: boolean ) => ({
    type: AuthenticationTypes.SET_LOADING_AUTHENTICATION,
    loading
});