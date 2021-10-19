import Product from "../objects/Product";



interface Header {
    suggestions: Product[],
    view?: boolean
}

export default Header;
