
import { useState } from 'react';

import { RouteComponentProps } from 'react-router';
import { Link, withRouter } from 'react-router-dom';


import { AccountMenuContainer, AccountMenuItem } from "./styles";



function AccountMenu({ match }: RouteComponentProps ) {
    const [ fixed, setFixed ] = useState<boolean>(false);

    window.addEventListener( 'scroll', (event: any) => {
        const { scrollY } = event.target.defaultView;

        setFixed( scrollY >= 78 );
    });

    return(
        <AccountMenuContainer fixed={false}>  
            <AccountMenuItem selected={ match.url === '/account'}>
                <Link to="/account">Dados Pessoais</Link>
            </AccountMenuItem>
            <AccountMenuItem selected={match.url.includes('/account/address')}>
                <Link to="/account/addresses">Endereços</Link>
            </AccountMenuItem>
            <AccountMenuItem selected={false}>
                <Link to="/">Cartões</Link>
            </AccountMenuItem>
            <AccountMenuItem selected={match.url === '/account/favorites'}>
                <Link to="/account/favorites">Lista de Desejos</Link>
            </AccountMenuItem>
            <AccountMenuItem selected={false}>
                <Link to="/">Carrinho</Link>
            </AccountMenuItem>
            <AccountMenuItem selected={false}>
                <Link to="/">Meus pedidos</Link>
            </AccountMenuItem>
            <AccountMenuItem selected={false}>
                <Link to="/">Configuração</Link>
            </AccountMenuItem>
        </AccountMenuContainer>
    );
}

export default withRouter(AccountMenu);
