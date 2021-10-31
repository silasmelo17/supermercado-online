
import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import axios from '../../config/axios.config';
import { AxiosError, AxiosResponse } from 'axios';

import TemplatePage from "../../templates/TemplatePage";
import Product from '../../types/objects/Product';

import connector, { Props } from './connector';

import {} from './styles';



function ProductById({ token, match }: Props ){
    const [ product, setProduct ] = useState<Product>();

    useEffect( () => {
        (async () => {
            axios.get<any, AxiosResponse<Product>>( `/product/${match.params.id}`, { headers: {token} })
                .then( result => {
                    setProduct(result.data);
                })
                .catch( (e: AxiosError<{ message: string }>) => {
                    alert(e.response?.data.message);
                });
        })();
    }, []);



    return(
        <TemplatePage>
            <span>{product?.name}</span>
        </TemplatePage>
    );
}

export default connector(withRouter(ProductById));
