
import { useState } from 'react';

import { FaCartPlus, FaTrash } from 'react-icons/fa';

import Product from '../../types/objects/Product';

import { BuyProduct } from './styles'



interface Props {
    product: Product,
    cart: boolean,
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}



function BuyProductButton({ product, cart, onClick }: Props) {
    return(
        <BuyProduct onClick={onClick} remove={cart} disabled={product.amount===0} >
            { !cart && <FaCartPlus style={{ marginRight: 8 }} />}
            { cart && <FaTrash style={{ marginRight: 8 }} /> }

            { cart 
                ? 'Remover' 
                : product.amount === 0 
                    ? 'Produto Indisponível'
                    : 'Adicionar' 
            }
        </BuyProduct>
    );
}

export default BuyProductButton;
