
import { AxiosResponse } from 'axios';

import User from '../objects/User';
import Authentication from '../reduxState/Authentication';




interface AxiosAuthentication extends Authentication {
    user: User
}



interface AxiosResponseAuthentication extends AxiosResponse<AxiosAuthentication> {
    user: User
}

export default AxiosResponseAuthentication;
