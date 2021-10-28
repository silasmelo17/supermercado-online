
import { connect, ConnectedProps } from 'react-redux';

import * as ThunkHeader from '../../store/header/thunk';
import * as ActionHeader from '../../store/header/actions';
import GlobalState from '../../types/reduxState/GlobalState';



const mapStateToProps = (state: GlobalState) => ({
    auth: state.authentication.auth,
    user: state.account?.user,
    view: state.header.view
});

const mapDispatchToProps = (dispatch: any) => ({
    loadSuggestions: ( name: string) => dispatch( ThunkHeader.findProductsSuggestions(name) ),
    loadCategories: () => dispatch(ThunkHeader.findCategories()),
    clearSuggestions: () => dispatch( ActionHeader.clearSuggestions() )
});

const connector = connect( mapStateToProps, mapDispatchToProps );



export type Props = ConnectedProps<typeof connector>;

export default connector;
