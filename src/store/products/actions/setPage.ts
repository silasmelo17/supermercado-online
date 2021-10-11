
import { SET_PAGE } from "../types"



export default function setPage( page: number ) {
    return {
        type: SET_PAGE,
        page
    }
}
