
import { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import GlobalState from '../../types/GlobalState';

import { PaginationContainer, PaginationItem, PaginationLink } from './styles';



const mapStateToProps = (state: GlobalState) => ({
    limit: state.products.limit,
    page: state.products.page,
    count: state.products.count
});

const connector = connect( mapStateToProps )



type PropsFromRedux = ConnectedProps<typeof connector>
interface Props extends PropsFromRedux {
    buttons?: number
}



function Pagination( { buttons = 5, count, limit, page }: Props ) {
    const [ position, setPosition ] = useState([ 1, buttons ]);

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

        setPosition( intervals[interval] );
    }, []);


    return(
        <PaginationContainer>
            <PaginationItem active={page > 1} >
                <PaginationLink to="/products">
                    Anterior
                </PaginationLink>
            </PaginationItem>

            { Array
                .from({ length: position[1] - position[0] + 1 })
                .map( (_, index ) => position[0] + index )
                .map( current => (
                    <PaginationItem active={current === page} key={`pagination___${current}`}>
                        <PaginationLink to={`/products?page=${current}&limit=${limit}`} >
                            {current}
                        </PaginationLink>
                    </PaginationItem>
                ))
            }

            <PaginationItem active={ page < Math.ceil(count/limit) }>
                <PaginationLink to="/products" >
                    Próximo
                </PaginationLink>
            </PaginationItem>
        </PaginationContainer>
    );
}

export default connector( Pagination );
