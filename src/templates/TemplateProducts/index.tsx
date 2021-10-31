
import { useEffect } from 'react';

import connector, { Props } from "./connector";

import PageTemplate from "../TemplatePage";
import ListProducts from "../../components/ListProducts";
import Pagination from "../../components/Pagination";



function TemplateProducts( { count, resetPage, children }: Props ) {
    useEffect( () => resetPage(), [] );

    return(
        <PageTemplate column={true}>
            <h2>{children}</h2>
            <span>{count} produtos encontrados.</span>

            <ListProducts />
            <Pagination buttons={7} />
        </PageTemplate>
    );
}

export default connector(TemplateProducts);
