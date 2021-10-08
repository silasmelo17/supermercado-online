
import React, { useEffect, useState } from 'react';

import api from '../config/axios.config';

import { useParams } from 'react-router-dom';

import ListProducts from '../components/ListProducts';

import AxiosResponseProducts from '../types/AxiosResponseProducts';
import TypeProduct from '../types/TypeProduct';


interface Params {
    name: string
}

function ProductsByName() {
    const params = useParams<Params>();

    const [ products, setProducts ] = useState<TypeProduct[]>([]);
    const [ page ] = useState<number>(1);
    const [ limit ] = useState<number>(30);
    const [ term, setTerm ] = useState<string>('');
    const [ count, setCount ] = useState<number>(0);

    useEffect( () => {
        setTerm(params.name);

        (async () => {
            try{
                const {data} = await api.get<AxiosResponseProducts>(`/products/name/${term}`, {
                    params: {
                        page, limit
                    }
                });

                setCount( data.count );
                setProducts(data.data);
            }catch(err) {
                console.log(err);
            }
        })();
    }, [ page, limit, term ]);


    return(
        <main>
            <h1>Produtos com o termo "{term}"</h1>
            <span>{count} produtos encontrados.</span>
            <ListProducts products={products} />
        </main>     
    );
}

export default ProductsByName;
