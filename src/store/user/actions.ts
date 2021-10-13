
import User from "../../types/User"

import * as AccountTypes from './types';


export const setUser = ( user: User ) => {
    return {
        type: AccountTypes.SET_USER,
        name: user.name,
        cpf: user.cpf,
        lastName: user.lastName,
        email: user.email,
        birthday: user.birthday,
        phone: user.phone
    }
}
