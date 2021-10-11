
import { AxiosResponse } from 'axios';

import User from './User';



interface ResponseAuthentication{
    auth: boolean,
    token: string,
    user: User
}

type AxiosResponseAuthentication = AxiosResponse<ResponseAuthentication>

export default AxiosResponseAuthentication;
