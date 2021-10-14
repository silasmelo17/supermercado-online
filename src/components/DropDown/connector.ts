
import { connect, ConnectedProps } from 'react-redux';
import GlobalState from '../../types/GlobalState';

import * as ThunksAuthentication from '../../store/authentication/thunks';



const mapStateToProps = (state: GlobalState) => ({
    user: state.account.user
});

const mapDispatchToProps = (dispatch: any) => ({
    signOut: () => dispatch(ThunksAuthentication.userSignOutAuthentication())
})

const connector = connect(mapStateToProps, mapDispatchToProps);



export interface Props extends ConnectedProps<typeof connector> {
    visible: boolean
}

export default connector;
