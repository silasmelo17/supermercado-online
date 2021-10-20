
interface Pagination<T> {
    count: number,
    limit: number,
    offset: number,
    page: number,
    data: T[]
}

export default Pagination;
