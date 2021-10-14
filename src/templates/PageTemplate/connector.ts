
import { PropsWithChildren } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import * as ThunksAuthentication from '../../store/authentication/thunks';
import { setHeaderView } from '../../store/header/actions';



const mapDispatchToProps = (dispatch: any) => ({ 
    checkTokenAuthentication: () => dispatch( ThunksAuthentication.userTokenAuthentication() ),
    visibleHeader: () => dispatch(setHeaderView(true))
});

const connector = connect( null, mapDispatchToProps );


type ProspsFromRedux = ConnectedProps<typeof connector>;
export interface Props extends PropsWithChildren<ProspsFromRedux> {
    column?: boolean
};


export default connector;
