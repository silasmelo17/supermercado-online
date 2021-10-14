
import { connect, ConnectedProps } from 'react-redux';
import GlobalState from '../../types/GlobalState';



const mapStateToProps = (state: GlobalState) => ({ 
    user: state.account.user
});

const connector = connect( mapStateToProps);



export type Props = ConnectedProps<typeof connector>;

export default connector;
