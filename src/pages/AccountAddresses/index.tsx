
import { useEffect } from "react";

import { Link } from 'react-router-dom';

import TemplateAccount from "../../templates/TemplateAccount";
import connector, { Props } from "./connector";

import AddressComponent from "../../components/AddressComponent";

import { ListAddresses } from './styles';



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

            <Link to="/account/addresses/register">Adicionar novo endereço</Link>
        </TemplateAccount>
    );
}

export default connector(AccountAddresses);
