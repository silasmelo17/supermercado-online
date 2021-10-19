
import { connect, ConnectedProps } from 'react-redux';
import GlobalState from '../../types/reduxState/GlobalState';



const mapStateToProps = (state: GlobalState) => ({
    token: state.authentication.token
});

const mapDispatchToProps = () => ({
    
});

const connector = connect( mapStateToProps, mapDispatchToProps );



export type Props = ConnectedProps<typeof connector>


export default connector;