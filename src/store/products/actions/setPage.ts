
import { ActionProducts } from ".."
import { SET_PAGE } from "../types"



export default function setPage( page: number ): ActionProducts {
    return {
        type: SET_PAGE,
        pagination: {
            page
        }
    }
}
