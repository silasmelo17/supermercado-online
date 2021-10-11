
import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import ListProducts from "../components/ListProducts";
import Pagination from '../components/Pagination';

import ThunksProducts from '../store/products/thunks'




const mapDispatchToProps = (dispatch: any ) => ({
    getAll: () => dispatch(ThunksProducts.findAllProducts())
});

const connector = connect( undefined, mapDispatchToProps );

type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {}



function Products( props: Props ) {
    useEffect( () => {
        props.getAll();
    }, []);

    return(
        <main>
            <h2>Lista de produtos</h2>
            <ListProducts />
            <Pagination buttons={7} />
        </main>
    );
}

export default connector(Products);
