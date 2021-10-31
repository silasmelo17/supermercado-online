
import GlobalState from "../../types/reduxState/GlobalState";

import { connect, ConnectedProps } from 'react-redux';

import { findProducts } from '../../store/products/thunks';



const mapStateToProps = (state: GlobalState) => ({
    page: state.products.page,
    limit: state.products.limit
});

const mapDispatchToProps = (dispatch: any ) => ({
    getAll: () => dispatch( findProducts('/products') )
});

const connector = connect( mapStateToProps, mapDispatchToProps );



export type Props = ConnectedProps<typeof connector>

export default connector;
