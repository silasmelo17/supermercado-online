
import { connect, ConnectedProps } from 'react-redux';
import GlobalState from '../../types/GlobalState';



const mapStateToProps = (state: GlobalState) => ({ 
    auth: state.authentication.auth
});

const connector = connect( mapStateToProps );



export type Props = ConnectedProps<typeof connector>;

export default connector;
