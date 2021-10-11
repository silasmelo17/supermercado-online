
import React, { useState, useEffect } from 'react';

import { FaUser, FaHeart, FaCartPlus, FaBars, FaSearch } from 'react-icons/fa'

import Suggestions from '../Suggestions';

import connector, { Props } from './connector';

import { 
    HeaderContainer, HeaderNavigation, HeaderTitle, 
    IconContainer, ListIcons, SearchProduct, SearchProductContainer 
} from './styles'




function Header( { loadingSuggestions, clearSuggestions }: Props ) {
    const [ name, setName ] = useState<string>("");


    useEffect( () => {
        if(name.length >= 3)
            loadingSuggestions(name);
    }, [name, loadingSuggestions]);

    const onSubmitSearchProductName = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        window.location.href=`/products/name/${name}`
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
                        onBlur={() => clearSuggestions() }
                        onFocus={ () => loadingSuggestions(name) }
                    />
                    <FaSearch size={18} />

                    <Suggestions />
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

export default connector(Header);
