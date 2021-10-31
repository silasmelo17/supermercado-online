
import { useEffect } from "react";
import { FaPlus, FaTrash, FaCartPlus } from "react-icons/fa";
import BuyProductButton from "../../components/BuyButton";

import TemplateAccount from "../../templates/TemplateAccount";

import Product from "../../types/objects/Product";

import connector, { Props } from "./connector";

import { 
    ProductContainerColumn, ListProductContainer, ProductContainer, 
    ProductImage, ProductName, Remove,
    IncrementFavorites, WishlistEmpty
}from './styles';



function AccountFavorites( { auth, favorites, loadFavorites, removeProduct, incrementFavorites, resetFavorites }: Props ) {
    
    useEffect( () => {
        if(auth) {
            resetFavorites();
            loadFavorites();
        }
    }, []);



    const FavoriteProduct = ({product, index}: { product: Product, index: number} )=> (<ProductContainer>
        <ProductContainerColumn>
            <ProductImage src={product.image_src} />
            <ProductName>
                {product.name}
            </ProductName>
        </ProductContainerColumn>

        <ProductContainerColumn>
            <Remove onClick={ () => removeProduct(product.id, index ) }>
                <FaTrash size={22} />
            </Remove>
            <BuyProductButton
                onClick={ () => {} }
                cart={false} 
                product={product}  
            />
        </ProductContainerColumn>
    </ProductContainer>);

    return(
        <TemplateAccount subtitle="Lista de Desejos">
            {favorites.count > 0 && <span>{favorites.count} produtos encontrados.</span>}
            {favorites.count === 0 && <WishlistEmpty>Nenhum produto favoritado.</WishlistEmpty>}

            <ListProductContainer>
                { favorites && favorites.data?.map( (product, index) => 
                    (<FavoriteProduct key={`favorites___${index}`}  product={product.Product} index={index} />)
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
