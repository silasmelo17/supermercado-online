
import GlobalState from "../../types/GlobalState";

import { connect, ConnectedProps } from 'react-redux';

import ThunksProducts from '../../store/products/thunks';
import ActionProducts from '../../store/products/actions';



const mapStateToProps = (state: GlobalState) => ({
    page: state.products.page,
    limit: state.products.limit,
    count: state.products.count
});

const mapDispatchToProps = (dispatch: any ) => ({
    getAll: () => dispatch(ThunksProducts.findAllProducts()),
    resetPage: () => dispatch( ActionProducts.resetPage() )
});

const connector = connect( mapStateToProps, mapDispatchToProps );



export type Props = ConnectedProps<typeof connector>

export default connector;
