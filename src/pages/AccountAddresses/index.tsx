
import { useEffect } from "react";

import TemplateAccount from "../../templates/TemplateAccount";
import connector, { Props } from "./connector";

import AddressComponent from "../../components/AddressComponent";

import { ListAddresses } from './styles';



function AccountAddresses({ addresses, loadAddresses }: Props ) {
    
    useEffect( () => {
        loadAddresses()
    }, [loadAddresses]);



    return(
        <TemplateAccount subtitle="Endereços" >
            <ListAddresses>
                {addresses.map( (address) => 
                    (<AddressComponent {...address} />) 
                )}
            </ListAddresses>
        </TemplateAccount>
    );
}

export default connector(AccountAddresses);
