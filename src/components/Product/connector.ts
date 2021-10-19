
import { connect, ConnectedProps } from 'react-redux';
import GlobalState from '../../types/reduxState/GlobalState';

import Product from '../../types/objects/Product';

import ProductsAction from '../../store/products/actions/';



const mapStateToProps = (state: GlobalState) => ({
    token: state.authentication.token,
    auth: state.authentication.auth
});

const mapDispatchToProps = (dispatch: any) => ({
    updateProduct: ( index: number, product: Product ) => dispatch( ProductsAction.updateProductByIndex(index, product))
});

const connector = connect(mapStateToProps, mapDispatchToProps);


type PropsFromRedux = ConnectedProps<typeof connector>;
type MergeTypes = PropsFromRedux & Product;

export interface Props extends MergeTypes {
    index: number
}

export default connector;
