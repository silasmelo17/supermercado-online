
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AccountMenuContainer, AccountMenuItem } from "./styles";



function AccountMenu() {
    const [ fixed, setFixed ] = useState<boolean>(false);

    window.addEventListener( 'scroll', (event: any) => {
        const { scrollY } = event.target.defaultView;

        setFixed( scrollY >= 78 );
    });

    return(
        <AccountMenuContainer fixed={false}>  
            <AccountMenuItem>
                <Link to="/account">Dados Pessoais</Link>
            </AccountMenuItem>
            <AccountMenuItem>
                <Link to="/">Endereços</Link>
            </AccountMenuItem>
            <AccountMenuItem>
                <Link to="/">Cartões</Link>
            </AccountMenuItem>
            <AccountMenuItem>
                <Link to="/account/favorites">Lista de Desejos</Link>
            </AccountMenuItem>
            <AccountMenuItem>
                <Link to="/">Carrinho</Link>
            </AccountMenuItem>
            <AccountMenuItem>
                <Link to="/">Meus pedidos</Link>
            </AccountMenuItem>
            <AccountMenuItem>
                <Link to="/">Configuração</Link>
            </AccountMenuItem>
        </AccountMenuContainer>
    );
}

export default AccountMenu;
