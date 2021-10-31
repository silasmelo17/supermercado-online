
import Address from "../../types/objects/Address";

import * as AddressesTypes from './types';



function addressesReducer( state: Address[] = [], action: any )  {
    switch(action.type) {
        case AddressesTypes.LOAD_ADDRESSES:
            return action.addresses;
        default:
            return state;
    }
}

export default addressesReducer;
