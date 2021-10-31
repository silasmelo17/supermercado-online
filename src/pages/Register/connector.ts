
import { connect, ConnectedProps } from 'react-redux';
import { setHeaderView } from '../../store/header/actions';
import GlobalState from '../../types/reduxState/GlobalState';



const mapStateToProps = (state: GlobalState) => ({ 
    auth: state.authentication.auth,
});

const mapDispathToProps = (dispatch: any) => ({
    ocultHeader: () => dispatch(setHeaderView(false))
})

const connector = connect( mapStateToProps, mapDispathToProps );



export type Props = ConnectedProps<typeof connector>;

export default connector;
