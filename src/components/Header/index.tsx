
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { FaUser, FaHeart, FaCartPlus, FaBars, FaSearch } from 'react-icons/fa';

import Suggestions from '../Suggestions';

import connector, { Props } from './connector';

import { 
    HeaderContainer, HeaderNavigation, HeaderTitle, 
    IconContainer, ListIcons, SearchProduct, SearchProductContainer,
    TransparentButton
} from './styles'

import DropDownMenu from '../DropDownMenu';
import DropDown from '../DropDown';
import DropDownAuthenticated from '../DropDown/DropDownAuthenticated';



function Header( { auth, view, loadSuggestions, loadCategories, clearSuggestions }: Props ) {
    const [ name, setName ] = useState<string>("");
    const [ visible, setVisible ] = useState<boolean>(false);
    const [ visibleMenu, setVisibleMenu ] = useState<boolean>(false);



    useEffect( () => {
        loadCategories();
    }, []); 

    useEffect( () => {
        if(name.length >= 3)
            loadSuggestions(name);
    }, [name, loadSuggestions]);

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

                { (view === true || view === undefined ) && <SearchProductContainer 
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
                        onFocus={ () => loadSuggestions(name) }
                    />
                    <TransparentButton>
                        <FaSearch size={18} color="white" />
                    </TransparentButton>

                    <Suggestions />
                </SearchProductContainer>}

                { (view === true || view === undefined ) && <ListIcons>
                    <IconContainer style={{ position: "relative"}} >
                        <Link to='/account'>
                            <FaUser size={18} 
                                onMouseEnter={ () => setVisible(true) }
                                onMouseLeave={ () => setTimeout( () => setVisible(false), 250) }
                            />
                        </Link>

                        { auth && <DropDownAuthenticated visible={visible} /> }
                        { auth === false && <DropDown visible={visible} /> }
                    </IconContainer>

                    { auth && <IconContainer>
                        <Link to="/account/favorites">
                            <FaHeart size={18} />
                        </Link>
                    </IconContainer>}

                    { auth && <IconContainer>
                        <Link to="/account/cart">
                            <FaCartPlus size={18} />
                        </Link>
                    </IconContainer>}

                    <IconContainer>
                        <FaBars 
                            size={18} 
                            onClick={ () => setVisibleMenu( old => !old )} 
                        />
                        <DropDownMenu visible={visibleMenu} />
                    </IconContainer>
                </ListIcons>}
            </HeaderNavigation>
        </HeaderContainer>
    );
}

export default connector(Header);
