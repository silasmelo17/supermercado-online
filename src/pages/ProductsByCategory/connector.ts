
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import GlobalState from '../../types/GlobalState';



const mapStateToProps = (state: GlobalState) => ({});

const connector = connect( mapStateToProps );



interface MatchParams {
    id: string
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type PropsFromRouter = RouteComponentProps<MatchParams>;

export type Props = PropsFromRedux & PropsFromRouter;

export default connector;
