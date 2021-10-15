
import { connect, ConnectedProps } from 'react-redux';
import GlobalState from '../../types/GlobalState';

import * as ThunksAddresses from '../../store/addresses/thunks';



const mapStateToProps = (state: GlobalState) => ({ 
    addresses: state.account.addresses
});

const mapDispatchToProps = (dispatch: any) => ({ 
    loadAddresses: () => dispatch(ThunksAddresses.loadAddresses())
});

const connector = connect( mapStateToProps, mapDispatchToProps );



export type Props = ConnectedProps<typeof connector>

export default connector;


