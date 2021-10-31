
import axios from '../../config/axios.config';

import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import * as AddressesAction from './actions';

import GlobalState from '../../types/reduxState/GlobalState';
import Address from '../../types/objects/Address';



export const loadAddresses = () => 
    async (dispatch: ThunkDispatch<GlobalState, void, AnyAction>, getState: () => GlobalState ) => {
        const { token } = getState().authentication;

        const result = await axios.get<Address[]>( '/addresses', {
            headers: { token }
        });

        if(result.status === 200) {
            dispatch(AddressesAction.setAddresses(result.data));
        }
    }
