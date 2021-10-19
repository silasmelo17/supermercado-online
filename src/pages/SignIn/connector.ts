
import { connect, ConnectedProps } from 'react-redux';
import GlobalState from '../../types/reduxState/GlobalState';

import * as ThunksActions from '../../store/authentication/thunks';
import * as HeaderActions from '../../store/header/actions';



const mapStateToProps = (state: GlobalState) => ({
    auth: state.authentication.auth
});

const mapDispatchProps = (dispatch: any) => ({
    signInUser: (email: string, password: string) => dispatch(ThunksActions.userAuthentication(email, password)),
    setHeaderView: (view: boolean) => dispatch(HeaderActions.setHeaderView(view))
});

const connector = connect( mapStateToProps, mapDispatchProps );



export type Props = ConnectedProps<typeof connector>

export default connector;
