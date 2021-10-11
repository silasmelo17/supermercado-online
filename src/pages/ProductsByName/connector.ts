
import { connect, ConnectedProps } from 'react-redux';

import { RouteComponentProps } from 'react-router';

import ActionProducts from '../../store/products/actions';
import findAllProductsByName from '../../store/products/thunks/findAllProductsByName';

import GlobalState from '../../types/GlobalState';



const mapStateToProps = ( state: GlobalState) => ({
    page: state.products.page,
    limit: state.products.limit,
    count: state.products.count,
    term: state.products.term
});

const mapDispatchToProps = (dispatch: any) => ({
    findProductsByName: (name: string) => dispatch( findAllProductsByName(name) ),
    resetPage: () => dispatch( ActionProducts.resetPage() )
})

const connector = connect( mapStateToProps, mapDispatchToProps );



interface MatchParams {
    name: string
}

type PropsFromRedux = ConnectedProps<typeof connector>
type PropsFromRouter = RouteComponentProps<MatchParams>

export type Props = PropsFromRedux & PropsFromRouter



export default connector;
