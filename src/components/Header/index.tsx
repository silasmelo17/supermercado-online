
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { FaUser, FaHeart, FaCartPlus, FaBars, FaSearch } from 'react-icons/fa';

import Suggestions from '../Suggestions';

import connector, { Props } from './connector';

import { 
    HeaderContainer, HeaderNavigation, HeaderTitle, 
    IconContainer, ListIcons, SearchProduct, SearchProductContainer,
    Username, DropDown
} from './styles'




function Header( { auth, user, loadingSuggestions, clearSuggestions }: Props ) {
    
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
                <Link to="/">
                    <HeaderTitle>
                        Supermercado
                    </HeaderTitle>
                </Link>

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
                        <Link to='/account'>
                            <FaUser size={18} />
                        </Link>
                        { auth && <Username>
                            Olá, {user?.name}
                        </Username>}

                        { auth && <DropDown>

                        </DropDown>}
                    </IconContainer>
                    <IconContainer>
                        <Link to="/account/favorites">
                            <FaHeart size={18} />
                        </Link>
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
