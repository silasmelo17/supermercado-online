
import Favorites from "./Favorites";
import User from "../objects/User";
import Address from '../objects/Address';
import StateCart from "./StateCart";



interface Account {
    user: User;
    favorites: Favorites,
    addresses: Address[],
    cart: StateCart
}

export default Account;
