
import { withRouter } from 'react-router';

import ListProducts from "../../components/ListProducts";
import Pagination from "../../components/Pagination";

import connector, { Props } from "./connector";



function ProductsByCategory( props: Props ) {
    return(
        <main>
            <h1>Produtos da categoria ""</h1>

            <ListProducts />
            <Pagination buttons={7} />
        </main>
    );
}

export default connector(withRouter(ProductsByCategory));
