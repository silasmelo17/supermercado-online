
import { useState, useEffect } from 'react';
import { withRouter } from "react-router";

import { AxiosResponse } from 'axios';

import axios from '../../config/axios.config';

import TemplateAccount from "../../templates/TemplateAccount";
import FormAddress from "../../components/FormAddress";

import Address from '../../types/objects/Address';

import connector, { Props } from "./connector";



function AccountAddress( { token, match }: Props ) {
    const [ address, setAddress ] = useState<Address | undefined>();

    useEffect( () => {
        (async () => {
            const result = await axios.get<any, AxiosResponse<Address>>( `/addresses/${match.params.id}`, {
                headers: { token }
            });

            setAddress({
                ...result.data,
                cep: result.data.cep.replace('-','')
            });
        })();
    }, []);

    useEffect( () => {
        console.log(address);
    }, [address]);



    return(
        <TemplateAccount title="Endereços" subtitle="Editar endereço" >
            { address && <FormAddress method="put" id={match.params.id} address={{
                ...address
            }} />}
        </TemplateAccount>
    );
}

export default connector(withRouter(AccountAddress));
