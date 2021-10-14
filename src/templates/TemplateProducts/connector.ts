
import { PropsWithChildren } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import * as ThunksAuthentication from '../../store/authentication/thunks';
import ActionProducts from '../../store/products/actions';

import GlobalState from '../../types/GlobalState';



const mapStateToProps = (state: GlobalState) => ({
    count: state.products.count
});

const mapDispatchToProps = (dispatch: any) => ({ 
    checkTokenAuthentication: () => dispatch( ThunksAuthentication.userTokenAuthentication() ),
    resetPage: () => dispatch( ActionProducts.resetPage() )
});

const connector = connect( mapStateToProps, mapDispatchToProps );


type ProspsFromRedux = ConnectedProps<typeof connector>;
export type Props = PropsWithChildren<ProspsFromRedux>;


export default connector;
