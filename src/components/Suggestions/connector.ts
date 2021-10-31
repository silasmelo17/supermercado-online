
import { connect, ConnectedProps } from 'react-redux';

import GlobalState from "../../types/reduxState/GlobalState";



const mapStateToProps = ( state: GlobalState ) => ({
    suggestions: state.header.suggestions
});

const connector = connect( mapStateToProps );



export type Props = ConnectedProps<typeof connector>;

export default connector;
