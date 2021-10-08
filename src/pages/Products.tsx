
import React, { useEffect, useState } from 'react';

import api from '../config/axios.config';

import ListProducts from '../components/ListProducts';

import AxiosResponseProducts from '../types/AxiosResponseProducts';
import TypeProduct from '../types/TypeProduct';



function Products() {
    const [ products, setProducts ] = useState<TypeProduct[]>([]);
    const [ page ] = useState<number>(1);
    const [ limit ] = useState<number>(30);

    useEffect(() => {
        (async () => {
            const {data} = await api.get<AxiosResponseProducts>('/products', {
                params: {
                    page, limit
                }
            });

            setProducts( data.data );
        })();
    }, [ limit, page ]);

    return(
        <main>
            <h1>Lista de produtos</h1>
            <ListProducts products={products} />
        </main>
    );
}

export default Products;
