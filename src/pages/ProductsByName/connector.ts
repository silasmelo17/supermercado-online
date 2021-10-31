
import { connect, ConnectedProps } from 'react-redux';

import { RouteComponentProps } from 'react-router';

import { findProducts } from '../../store/products/thunks';

import GlobalState from '../../types/reduxState/GlobalState';




const mapStateToProps = ( state: GlobalState) => ({
    page: state.products.page,
    limit: state.products.limit,
    term: state.products.term
});

const mapDispatchToProps = (dispatch: any) => ({
    findProductsByName: (name: string) => dispatch( findProducts(`/products/name/${name}`) )
});

const connector = connect( mapStateToProps, mapDispatchToProps );



interface MatchParams {
    name: string
}

type PropsFromRedux = ConnectedProps<typeof connector>
type PropsFromRouter = RouteComponentProps<MatchParams>

export type Props = PropsFromRedux & PropsFromRouter



export default connector;
