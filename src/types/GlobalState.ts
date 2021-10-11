
import Authentication from './Authentication';
import User from './User';
import Products from './Products';



interface GlobalState {
    authentication: Authentication,
    user?: User,
    products: Products
}


export default GlobalState;
