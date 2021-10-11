
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import findAllProductsByCategory from '../../store/products/thunks/findAllProductsByCategory';

import GlobalState from '../../types/GlobalState';



const mapStateToProps = (state: GlobalState) => ({
    count: state.products.count
});

const mapDispatchProps = (dispatch:any) => ({ 
    loadProducts: (id:number) => dispatch( findAllProductsByCategory(id) )
 });

const connector = connect( mapStateToProps, mapDispatchProps );



interface MatchParams {
    id: string
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type PropsFromRouter = RouteComponentProps<MatchParams>;

export type Props = PropsFromRedux & PropsFromRouter;

export default connector;
