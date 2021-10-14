
import { useEffect } from 'react';

import { withRouter } from 'react-router';

import TemplateProducts from '../../templates/TemplateProducts';

import connector, { Props } from './connector';



function ProductsByName({ match, page, limit, term, findProductsByName }: Props ) {

    useEffect( () => {
        const { name } = match.params;

        findProductsByName(name);
    }, [page, limit, findProductsByName, match.params]);


    return(
        <TemplateProducts>
            Produtos com o termo {`"${term}"`}.
        </TemplateProducts>     
    );
}

export default connector(withRouter(ProductsByName));
