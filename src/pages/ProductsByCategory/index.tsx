
import { useEffect } from 'react';
import { withRouter } from 'react-router';

import TemplateProducts from '../../templates/TemplateProducts';

import connector, { Props } from "./connector";



function ProductsByCategory( { match, loadProducts }: Props ) {
    
    useEffect( () => {
        const { id } = match.params;
        loadProducts( Number(id) );
    }, [ match.params ]);

    return(
        <TemplateProducts>
            Lista de produtos da categoria "{match.params.name}"
        </TemplateProducts>
    );
}

export default connector(withRouter(ProductsByCategory));
