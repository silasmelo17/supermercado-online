
import Favorites from "./Favorites";
import User from "./User";
import Address from './Address';



interface Account {
    user: User;
    favorites: Favorites,
    addresses: Address[]
}

export default Account;
