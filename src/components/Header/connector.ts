
import { connect, ConnectedProps } from 'react-redux';

import * as ThunkHeader from '../../store/header/thunk';
import * as ActionHeader from '../../store/header/actions';



const mapDispatchToProps = (dispatch: any) => ({
    loadingSuggestions: ( name: string) => dispatch( ThunkHeader.findProductsSuggestions(name) ),
    clearSuggestions: () => dispatch( ActionHeader.clearSuggestions() )
});

const connector = connect( undefined, mapDispatchToProps );



export type Props = ConnectedProps<typeof connector>;

export default connector;
