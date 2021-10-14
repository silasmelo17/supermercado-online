
import { Link } from 'react-router-dom';

import connector, { Props } from './connector';

import { DropDownContainer, DropDownItem, Text } from './styles';



function DropDown({ visible }: Props) {
    return(
        <DropDownContainer visible={visible}>
            <Text>
                Bem vindo
            </Text>
            <DropDownItem>
                <Link to="/register">
                    Criar uma nova conta.
                </Link>
            </DropDownItem>
            <DropDownItem>
                <Link to="/signin">
                    Já possuo uma conta.
                </Link>
            </DropDownItem>
        </DropDownContainer>
    );
}

export default connector(DropDown);
