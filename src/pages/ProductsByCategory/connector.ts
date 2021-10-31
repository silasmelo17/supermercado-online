
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { findProducts } from '../../store/products/thunks';



const mapDispatchProps = (dispatch:any) => ({ 
    loadProducts: (id:number) => dispatch( findProducts(`/products/category/${id}`) )
 });

const connector = connect( undefined, mapDispatchProps );



interface MatchParams {
    id: string,
    name: string
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type PropsFromRouter = RouteComponentProps<MatchParams>;

export type Props = PropsFromRedux & PropsFromRouter;

export default connector;
