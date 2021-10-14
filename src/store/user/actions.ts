
import User from "../../types/User"

import * as AccountTypes from './types';


export const setUser = ( user: User ) => {
    return {
        type: AccountTypes.SET_USER,
        name: user.name,
        cpf: user.cpf,
        last_name: user.last_name,
        email: user.email,
        birthday: user.birthday,
        phone: user.phone
    }
}
