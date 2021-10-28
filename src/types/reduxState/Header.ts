import Category from "../objects/Category";
import Product from "../objects/Product";



interface Header {
    suggestions: Product[],
    view?: boolean,
    categories: Category[]
}

export default Header;
