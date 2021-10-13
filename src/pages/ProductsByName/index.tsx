
import { useEffect } from 'react';

import { withRouter } from 'react-router';
import ListProducts from '../../components/ListProducts';
import Pagination from '../../components/Pagination';

import connector, { Props } from './connector';



function ProductsByName({ match, page, limit, count, term, findProductsByName, resetPage }: Props ) {

    useEffect( () => resetPage(), [resetPage] );

    useEffect( () => {
        const { name } = match.params;

        findProductsByName(name);
    }, [page, limit, findProductsByName, match.params]);


    return(
        <main>
            <h1>Produtos com o termo {`"${term}"`}</h1>
            <span>{count} produtos encontrados.</span>

            <ListProducts />
            <Pagination buttons={7} />
        </main>     
    );
}

export default connector(withRouter(ProductsByName));
