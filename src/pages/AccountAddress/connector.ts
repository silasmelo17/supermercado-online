
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import GlobalState from '../../types/reduxState/GlobalState';



const mapStateToProps = (state: GlobalState ) => {
    console.log(state);

    return {
        addresses: state.account.addresses
    }
};

const connector = connect( mapStateToProps );



type PropsFromRedux = ConnectedProps<typeof connector>;
type PropsFromRouter = RouteComponentProps<any>;

export type Props = PropsFromRedux & PropsFromRouter;



export default connector;
