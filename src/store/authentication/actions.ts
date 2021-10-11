
import * as AuthenticationTypes from './types';



export const userAuthentication = ( auth: boolean, token: string ) => {
    return {
        type: AuthenticationTypes.SET_AUTHENTICATION,
        auth,
        token
    }
}
