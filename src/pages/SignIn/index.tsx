
import { useState } from 'react';

import { ButtonHighlight, Form, Input, ColumnContainer, Label } from '../../components/Forms/styles';
import { UserIcon, UserIconContainer, ForgetPassoword } from './styles';

import connector, { Props } from './connector';



function SignIn({ signInUser }: Props) {
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');



    const onClickSignIn = () => {
        signInUser(email, password);
    }

    return(
        <Form>
            <UserIconContainer>
                <UserIcon size={130} />
            </UserIconContainer>
            
            <ColumnContainer>
                <Label>E-mail</Label>
                <Input 
                    type='email' 
                    placeholder="Digite seu e-mail" 
                    value={email}
                    onChange={ e => setEmail( e.target.value ) }    
                />
            </ColumnContainer>
            <ColumnContainer>
                <Label>Senha</Label>
                <Input 
                    type='password' 
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={ e => setPassword( e.target.value ) } 
                />
            </ColumnContainer>

            <ColumnContainer>
                <ForgetPassoword to="/">
                    Esqueci minha senha.
                </ForgetPassoword>
            </ColumnContainer>

            <ColumnContainer>
                <ButtonHighlight onClick={onClickSignIn}>
                    Sign In
                </ButtonHighlight>
            </ColumnContainer>
        </Form>
    );
}

export default connector(SignIn);
