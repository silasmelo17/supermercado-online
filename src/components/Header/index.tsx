
import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { FaUser, FaHeart, FaCartPlus, FaBars, FaSearch } from 'react-icons/fa'

import { 
    HeaderContainer, HeaderNavigation, HeaderTitle, 
    IconContainer, ListIcons, SearchProduct, SearchProductContainer 
} from './styles'



function Header() {
    const history = useHistory();

    console.log(history)

    const [ name, setName ] = useState<string>("");



    const onSubmitSearchProductName = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(history)

        // const path = `/products/name/${name}`;
        // history.push( path );
    }

    return(
        <HeaderContainer>
            <HeaderNavigation>
                <HeaderTitle>
                    Supermercado
                </HeaderTitle>

                <SearchProductContainer 
                    autoComplete="off" 
                    onSubmit={onSubmitSearchProductName} 
                >
                    <SearchProduct 
                        type="text" 
                        name="name" 
                        value={name}
                        placeholder="Digite o nome do produto" 
                        onChange={e => setName(e.target.value)} 
                    />
                    <FaSearch size={18} />
                </SearchProductContainer>

                <ListIcons>
                    <IconContainer>
                        <FaUser size={18} />
                    </IconContainer>
                    <IconContainer>
                        <FaHeart size={18} />
                    </IconContainer>
                    <IconContainer>
                        <FaCartPlus size={18} />
                    </IconContainer>
                    <IconContainer>
                        <FaBars size={18} />
                    </IconContainer>
                </ListIcons>
            </HeaderNavigation>
        </HeaderContainer>
    );
}

export default Header;
