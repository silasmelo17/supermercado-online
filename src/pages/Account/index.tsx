
import TemplateAccount from '../../templates/TemplateAccount';

import connector, { Props } from "./connector";
import { FieldContainer, FieldName, FieldValue } from './styles';



function Account( {user}: Props) {
    return(
        <TemplateAccount subtitle="Dados Pessoais">
            <FieldContainer>
                <FieldName>Nome: </FieldName>
                <FieldValue>{user?.name} {user?.last_name}</FieldValue>
            </FieldContainer>

            <FieldContainer>
                <FieldName>CPF: </FieldName>
                <FieldValue>{user?.cpf}</FieldValue>
            </FieldContainer>

            <FieldContainer>
                <FieldName>Telefone: </FieldName>
                <FieldValue>{user?.phone}</FieldValue>
            </FieldContainer>

            <FieldContainer>
                <FieldName>E-mail: </FieldName>
                <FieldValue>{user?.email}</FieldValue>
            </FieldContainer>

            <FieldContainer>
                <FieldName>Data de nascimento: </FieldName>
                <FieldValue>{user?.birthday}</FieldValue>
            </FieldContainer>
        </TemplateAccount>
    )
}

export default connector(Account);
