
import { RouteComponentProps } from 'react-router';
import { Link, withRouter } from 'react-router-dom';


import { AccountMenuContainer, AccountMenuItem } from "./styles";



function AccountMenu({ match }: RouteComponentProps ) {

    return(
        <AccountMenuContainer>  
            <AccountMenuItem selected={ match.url === '/account'}>
                <Link to="/account">Dados Pessoais</Link>
            </AccountMenuItem>
            <AccountMenuItem selected={match.url.includes('/account/address')}>
                <Link to="/account/addresses">Endereços</Link>
            </AccountMenuItem>
            <AccountMenuItem selected={match.url.includes('/account/cards')}>
                <Link to="/account/cards">Cartões</Link>
            </AccountMenuItem>
            <AccountMenuItem selected={match.url === '/account/favorites'}>
                <Link to="/account/favorites">Lista de Desejos</Link>
            </AccountMenuItem>
            <AccountMenuItem selected={match.url.includes('/account/cart')}>
                <Link to="/account/cart">Carrinho</Link>
            </AccountMenuItem>
            <AccountMenuItem selected={false}>
                <Link to="/account/orders">Meus pedidos</Link>
            </AccountMenuItem>
            <AccountMenuItem selected={false}>
                <Link to="/account/configuration">Configuração</Link>
            </AccountMenuItem>
        </AccountMenuContainer>
    );
}

export default withRouter(AccountMenu);
