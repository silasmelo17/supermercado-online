
import { connect, ConnectedProps  } from 'react-redux'; 

import GlobalState from '../../types/GlobalState';

import Product from '../Product';

import { ProductsContainer } from './styles';



const mapStateToProps = (state: GlobalState) => ({
    products: state.products.data
});

const connector = connect(mapStateToProps );



type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {}




function ListProducts(props: Props) {

    // const LoadingProducts = () => props.products.length === 0
    //     ? (<Loading size={32} />)
    //     : (<ProductsContainer>
    //         { props.products.map( (product, i) => 
    //             <Product key={`product___${i}`} {...product} /> ) }
    //     </ProductsContainer>)
    
    return(
        <ProductsContainer>
            { props.products.map( (product, i) => 
                <Product key={`product___${i}`} {...product} /> ) }
        </ProductsContainer>
    );
}

export default connector(ListProducts);
