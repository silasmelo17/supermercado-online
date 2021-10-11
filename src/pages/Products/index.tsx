
import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import ListProducts from "../../components/ListProducts";
import Pagination from '../../components/Pagination';

import ThunksProducts from '../../store/products/thunks'
import GlobalState from '../../types/GlobalState';

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

type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {}



function Products( { page, count, limit, getAll, resetPage }: Props ) {

    useEffect( () => resetPage(), [resetPage]);

    useEffect( () => {
        getAll();
    }, [ page, limit, getAll ]);

    return(
        <main>
            <h2>Lista de produtos</h2>
            <span>{count} produtos encontrados.</span>

            <ListProducts />
            <Pagination buttons={7} />
        </main>
    );
}

export default connector(Products);
