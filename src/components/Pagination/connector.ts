
import { connect, ConnectedProps } from 'react-redux';

import ActionProducts from "../../store/products/actions";

import GlobalState from "../../types/reduxState/GlobalState";



const mapStateToProps = (state: GlobalState) => ({
    limit: state.products.limit,
    page: state.products.page,
    count: state.products.count
});

const mapDispatchToProps = (dispatch: any) => ({
    setPage: (page: number) => dispatch(ActionProducts.setPage(page)),
    incrementPage: () => dispatch(ActionProducts.incrementPage()),
    decrementPage: () => dispatch(ActionProducts.decrementPage())
});

const connector = connect( mapStateToProps, mapDispatchToProps );



type PropsFromRedux = ConnectedProps<typeof connector>

export interface Props extends PropsFromRedux {
    buttons?: number
}

export default connector;
