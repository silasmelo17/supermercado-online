
import Favorites from "./Favorites";
import User from "../objects/User";
import Address from '../objects/Address';
import Cart from "./Cart";



interface Account {
    user: User;
    favorites: Favorites,
    addresses: Address[],
    cart: Cart
}

export default Account;
