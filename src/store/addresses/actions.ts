
import Address from "../../types/Address"

import * as AddressTypes from './types';


export const setAddresses = (addresses: Address[] ) => ({
    type: AddressTypes.LOAD_ADDRESSES,
    addresses
});
