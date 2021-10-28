
import { MenuContainer, DropDown, DropDownTitle, DropDownItem, DropDownMenuLink } from './styles';

import connector, { Props } from './connector';



function DropDownMenu({ visible , categories }: Props) {


    return(
        <MenuContainer>
            <DropDown>
                <DropDownTitle>Categorias</DropDownTitle>

                { categories.map( category => (
                    <DropDownItem>
                        <DropDownMenuLink to={`/products/category/${category.id}/${category.name}`}>
                            {category.name}
                        </DropDownMenuLink>
                    </DropDownItem>
                )) }
            </DropDown>
        </MenuContainer>
    );
}

export default connector(DropDownMenu);

