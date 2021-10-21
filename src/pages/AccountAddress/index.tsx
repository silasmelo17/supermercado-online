
import { useState } from 'react';

import connector, { Props } from "./connector";

import { withRouter } from "react-router";
import TemplateAccount from "../../templates/TemplateAccount";
import FormAddress from "../../components/FormAddress";



function AccountAddress( { addresses, match }: Props ) {
    const [ address ] = useState(addresses.find( a => a.id === Number(match.params.id) ));

    return(
        <TemplateAccount title="Endereços" subtitle="Editar endereço" >
            <FormAddress method="put" address={{
                ...address,
                cep: address?.cep.replace( '-', '' )
            }} />
        </TemplateAccount>
    );
}

export default connector(withRouter(AccountAddress));
