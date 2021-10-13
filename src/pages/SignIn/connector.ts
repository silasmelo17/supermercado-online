
import { connect, ConnectedProps } from 'react-redux';
import GlobalState from '../../types/GlobalState';

import * as ThunksActions from '../../store/authentication/thunks';


const mapStateToProps = (state: GlobalState) => ({
    auth: state.authentication.auth
});

const mapDispatchProps = (dispatch: any) => ({
    signInUser: (email: string, password: string) => dispatch(ThunksActions.userAuthentication(email, password))
});


const connector = connect( mapStateToProps, mapDispatchProps );



export type Props = ConnectedProps<typeof connector>

export default connector;
