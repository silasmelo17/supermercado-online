
import { FaSpinner } from 'react-icons/fa';

import { LoadingContainer } from "./styles";



function Loading() {
    return(
        <LoadingContainer>
            <FaSpinner color="white" size={32} />
        </LoadingContainer>
    )
}

export default Loading;
