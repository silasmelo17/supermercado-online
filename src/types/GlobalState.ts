
import Authentication from './Authentication';
import User from './User';
import Products from './Products';
import Header from './Header';



interface GlobalState {
    authentication: Authentication,
    user?: User,
    products: Products,
    header: Header
}


export default GlobalState;
