
import { useEffect } from 'react';
import { withRouter } from 'react-router';

import ListProducts from "../../components/ListProducts";
import Pagination from "../../components/Pagination";

import connector, { Props } from "./connector";



function ProductsByCategory( { count, match, loadProducts }: Props ) {
    
    useEffect( () => {
        const { id } = match.params;
        loadProducts( Number(id) );
    }, [loadProducts, match.params ]);

    return(
        <main>
            <h2>Lista de produtos</h2>
            <span>{count} produtos encontrados.</span>

            <ListProducts />
            <Pagination buttons={7} />
        </main>
    );
}

export default connector(withRouter(ProductsByCategory));
