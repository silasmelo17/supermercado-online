
import { useEffect, useState } from 'react';

import connector, { Props } from './connector';

import { PaginationContainer, PaginationButton } from './styles';



function Pagination( { buttons = 5, count, limit, page, setPage, incrementPage, decrementPage }: Props ) {
    const [ arrayButtons, setArrayButtons ] = useState<number[]>([]);

    useEffect( () => {
        const pages = Math.ceil(count/limit);
        const margin = Math.floor(buttons/2);

        const intervals = {
            'startPagination': [ 1, pages <= buttons ? pages: buttons ],
            'middlePagination': [ page-margin, page+margin ],
            'finalPagination': [ pages-buttons+2, pages ]
        }

        const startPagination = page <= margin+1;
        const middlePagination = page > margin+1 && page <= pages-margin;
        const interval = startPagination 
            ? 'startPagination'
            :  middlePagination 
                ? 'middlePagination'
                : 'finalPagination';

        const [ start, end ] = intervals[interval];

        const btns = [];
        for( let i = start; i <= end; i++) {
            btns.push(i);
        }

        setArrayButtons(btns);
    }, [page, count, limit, buttons]);

    useEffect( () => {
        window.scrollTo(0,0);
    }, [page]);



    return(<>
        { count > 0 && <PaginationContainer>
            <PaginationButton 
                active={page > 1} 
                onClick={ () => decrementPage() }
                disabled={page <= 1}
            > Anterior </PaginationButton>

            { arrayButtons
                .map( current => (
                    <PaginationButton
                        active={page===current}
                        onClick={() => setPage(current)}
                    > {current} </PaginationButton>
                ))
            }

            <PaginationButton 
                active={ page < Math.ceil(count/limit) }
                onClick={() => incrementPage()}
                disabled={page >= Math.ceil(count/limit)}  
            > Próximo </PaginationButton>
        </PaginationContainer>}
    </>);
}

export default connector( Pagination );
