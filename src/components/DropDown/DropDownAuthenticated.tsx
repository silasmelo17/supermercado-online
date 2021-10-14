

import {Link} from 'react-router-dom';

import connector, { Props } from './connector';

import { DropDownContainer, DropDownItem, Button, Text } from "./styles";



function DropDownAuthentication({ user, visible, signOut }: Props ) {
    return(
        <DropDownContainer visible={visible}>
            <Text>
                Olá, {user?.name}
            </Text>
            <DropDownItem>
                <Link to="/account">
                    Acessar minha conta
                </Link>
            </DropDownItem>
            <DropDownItem>
                <Button onClick={() => signOut()}>
                    Quero sair.
                </Button>
            </DropDownItem>
        </DropDownContainer>
    );
}

export default connector(DropDownAuthentication);
