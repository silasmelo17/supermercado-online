
import { useEffect } from "react";

import TemplateAccount from "../../templates/TemplateAccount";
import connector, { Props } from "./connector";

import AddressComponent from "../../components/AddressComponent";

import { ListAddresses, ButtonLink } from './styles';



function AccountAddresses({ addresses, loadAddresses }: Props ) {
    
    useEffect( () => {
        loadAddresses();
    }, [loadAddresses]);



    return(
        <TemplateAccount title="Endereços" subtitle="Meus endereços" >
            <ListAddresses>
                {addresses.map( (address) => 
                    (<AddressComponent {...address} />) 
                )}
            </ListAddresses>

            <ButtonLink 
                to="/account/addresses/register"
                style={{ marginLeft: 'auto' }}
            >
                Adicionar novo endereço
            </ButtonLink>
        </TemplateAccount>
    );
}

export default connector(AccountAddresses);
