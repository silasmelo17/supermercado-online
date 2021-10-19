
import Favorite from '../objects/Favorite';



interface Favorites {
    count: number,
    limit: number,
    offset: number,
    page: number,
    data: Favorite[]
}

export default Favorites;
