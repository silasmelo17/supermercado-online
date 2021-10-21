
import { useEffect } from 'react';

import connector, {Props} from './connector';

import TemplateProducts from '../../templates/TemplateProducts';



function Products( { page, limit, getAll }: Props ) {

    useEffect( () => {
        getAll();
    }, [ page, limit ]);

    return(
        <TemplateProducts>
            Lista de produtos
        </TemplateProducts>
    );
}

export default connector(Products);
