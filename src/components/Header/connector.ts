
import { connect, ConnectedProps } from 'react-redux';

import * as ThunkHeader from '../../store/header/thunk';
import * as ActionHeader from '../../store/header/actions';
import GlobalState from '../../types/GlobalState';



const mapStateToProps = (state: GlobalState) => ({
    auth: state.authentication.auth,
    user: state.account?.user
});

const mapDispatchToProps = (dispatch: any) => ({
    loadingSuggestions: ( name: string) => dispatch( ThunkHeader.findProductsSuggestions(name) ),
    clearSuggestions: () => dispatch( ActionHeader.clearSuggestions() )
});

const connector = connect( mapStateToProps, mapDispatchToProps );



export type Props = ConnectedProps<typeof connector>;

export default connector;
