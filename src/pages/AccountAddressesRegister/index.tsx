
import TemplateAccount from "../../templates/TemplateAccount";
import connector, { Props } from "./connector";

import FormAddress from "../../components/FormAddress";



function AccountAddressesRegister( props: Props ) {
    return(
        <TemplateAccount title='Endereços' subtitle='Registrar endereço'>
            <FormAddress method='post' />
        </TemplateAccount>
    );
}

export default connector(AccountAddressesRegister);
