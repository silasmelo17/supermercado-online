
import GlobalState from "../../types/GlobalState";

import { connect, ConnectedProps } from 'react-redux';

import ThunksProducts from '../../store/products/thunks';



const mapStateToProps = (state: GlobalState) => ({
    page: state.products.page,
    limit: state.products.limit
});

const mapDispatchToProps = (dispatch: any ) => ({
    getAll: () => dispatch(ThunksProducts.findAllProducts())
});

const connector = connect( mapStateToProps, mapDispatchToProps );



export type Props = ConnectedProps<typeof connector>

export default connector;
