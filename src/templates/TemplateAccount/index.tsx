
import TemplatePage from '../TemplatePage';

import AccountMenu from "../../components/AccountMenu";

import { Container } from '../../components/Main';

import connector, { Props } from "./connector";
import { Title, SubTitle } from './styles';



function TemplateAccount( {title, subtitle, children}: Props) {
    return(
        <TemplatePage>
            <AccountMenu />
            <Container>
                { title && <Title>{title}</Title>}
                { subtitle && <SubTitle>{subtitle}</SubTitle>}

                {children}
            </Container>
        </TemplatePage>
    )
}

export default connector(TemplateAccount);
