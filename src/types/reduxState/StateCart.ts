
import Pagination from '../Pagination';
import Cart from './Cart'



export default interface StateCart extends Pagination<Cart>{
    status?: number
}
