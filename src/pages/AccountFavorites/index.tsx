
import { useEffect } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { BuyProduct } from "../../components/Product/styles";
import connector, { Props } from "./connector";

import { 
    Container, ListProductContainer, ProductContainer, 
    ProductImage, ProductName, Remove,
    IncrementFavorites
}from './styles';



function AccountFavorites( { favorites, loadFavorites, removeProduct, incrementFavorites, resetFavorites }: Props ) {
    useEffect( () => {
        resetFavorites();
        loadFavorites();
    }, [loadFavorites, resetFavorites])

    return(
        <main>
            <h2>Lista de favoritos.</h2>
            <span>{favorites.count} produtos encontrados.</span>

            <ListProductContainer>
                {favorites && favorites.data?.map( ({ Product }) => 
                    (<ProductContainer>
                        <Container>
                            <ProductImage src={Product.image_src} />

                            <ProductName>
                                {Product.name}
                            </ProductName>
                        </Container>

                        <Container>
                            <Remove onClick={ () => removeProduct(Product.id) }>
                                <FaTrash size={22} />
                            </Remove>
                            <BuyProduct>Adicionar</BuyProduct>
                        </Container>
                    </ProductContainer>) 
                )}

                <IncrementFavorites 
                    onClick={() => incrementFavorites()}
                    disabled={favorites.count === favorites.data.length}
                >
                    <FaPlus size={22} />
                </IncrementFavorites>
            </ListProductContainer>
        </main>
    )
}

export default connector(AccountFavorites);
