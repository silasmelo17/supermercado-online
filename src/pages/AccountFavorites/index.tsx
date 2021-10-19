
import { useEffect } from "react";
import { FaPlus, FaTrash, FaCartPlus } from "react-icons/fa";

import TemplateAccount from "../../templates/TemplateAccount";

import { BuyProduct } from "../../components/Product/styles";

import Product from "../../types/objects/Product";

import connector, { Props } from "./connector";

import { 
    ProductContainerColumn, ListProductContainer, ProductContainer, 
    ProductImage, ProductName, Remove,
    IncrementFavorites, WishlistEmpty
}from './styles';



function AccountFavorites( { favorites, loadFavorites, removeProduct, incrementFavorites, resetFavorites }: Props ) {
    
    useEffect( () => {
        resetFavorites();
        loadFavorites();
    }, [loadFavorites, resetFavorites])



    const FavoriteProduct = ({product}: { product: Product} )=> (<ProductContainer>
        <ProductContainerColumn>
            <ProductImage src={product.image_src} />
            <ProductName>
                {product.name}
            </ProductName>
        </ProductContainerColumn>

        <ProductContainerColumn>
            <Remove onClick={ () => removeProduct(product.id) }>
                <FaTrash size={22} />
            </Remove>
            <BuyProduct>
                <FaCartPlus style={{ marginRight: 8 }} />
                Adicionar
            </BuyProduct>
        </ProductContainerColumn>
    </ProductContainer>);

    return(
        <TemplateAccount subtitle="Lista de Desejos">
            {favorites.count > 0 && <span>{favorites.count} produtos encontrados.</span>}
            {favorites.count === 0 && <WishlistEmpty>Nenhum produto favoritado.</WishlistEmpty>}

            <ListProductContainer>
                { favorites && favorites.data?.map( ({ Product }) => 
                    (<FavoriteProduct product={Product} />)
                )}

                { favorites.count !== favorites.data.length && <IncrementFavorites 
                    onClick={() => incrementFavorites()}
                    disabled={favorites.count === favorites.data.length}
                >
                    <FaPlus size={22} />
                </IncrementFavorites>}
            </ListProductContainer>
        </TemplateAccount>
    );
}

export default connector(AccountFavorites);
