
import TemplatePage from '../../templates/PageTemplate';

import AccountMenu from "../../components/AccountMenu";

import { Container } from '../../components/Main';

import connector, { Props } from "./connector";
import { FieldContainer, FieldName, FieldValue, Title, SubTitle } from './styles';



function Account( {user}: Props) {
    return(
        <TemplatePage>
            <AccountMenu />
            <Container>
                <Title>
                </Title>

                <SubTitle>
                    Dados Pessoais
                </SubTitle>

                <FieldContainer>
                    <FieldName>Nome: </FieldName>
                    <FieldValue>{user?.name}</FieldValue>
                </FieldContainer>

                <FieldContainer>
                    <FieldName>Sobrenome: </FieldName>
                    <FieldValue>{user?.last_name}</FieldValue>
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
            </Container>
        </TemplatePage>
    )
}

export default connector(Account);
