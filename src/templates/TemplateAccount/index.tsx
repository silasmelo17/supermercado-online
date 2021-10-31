
import TemplatePage from '../TemplatePage';

import AccountMenu from "../../components/AccountMenu";

import { Container } from '../../components/Main';

import connector, { Props } from "./connector";
import { Title, SubTitle, Paragraph, ClickHere } from './styles';
import { Link } from 'react-router-dom';



function TemplateAccount({ auth, title, subtitle, children }: Props) {
    return (
        <TemplatePage>
            {auth
                ? <>
                    <AccountMenu />
                    <Container>
                        {title && <Title>{title}</Title>}
                        {subtitle && <SubTitle>{subtitle}</SubTitle>}

                        {children}
                    </Container>
                </>
                : <Container>
                    <SubTitle>
                        Bem vindo, usuário anonimo. 
                    </SubTitle>

                    <Paragraph>
                        Para acessar essa rota, é necessário possuir um cadastro. 
                    </Paragraph>

                    <Paragraph>
                        Já tem uma conta ? 
                        <ClickHere to="/signin">Clique aqui</ClickHere>
                    </Paragraph>

                    <Paragraph>
                        Ainda não tem ? 
                        <ClickHere to="/register">Clique aqui</ClickHere>
                    </Paragraph>
                </Container>
            }
        </TemplatePage>
    )
}

export default connector(TemplateAccount);
