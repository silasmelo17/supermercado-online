
import axios from './../../config/axios.config';
import { AxiosResponse, AxiosError } from 'axios';

import { useState, useEffect, FormEvent } from 'react';

import { ButtonHighlight, Form, Input, ColumnContainer, Label } from '../../components/Forms/styles';
import { UserIcon, UserIconContainer, RightLink, RightText } from './styles';

import Header from '../../components/Header';

import connector, { Props } from './connector';
import { userAuthentication } from '../../store/authentication/actions';
import { setUser } from '../../store/user/actions';



function SignIn({ auth, signInUser, setHeaderView }: Props) {
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    useEffect( () => {
        setHeaderView(false);
    }, [setHeaderView]);


    const onSubmitSignin = async (event: FormEvent) => {
        event.preventDefault();
        
        signInUser( email, password );
    }



    return(
        <>
            <Header />
            
            <Form onSubmit={onSubmitSignin}>
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

                <ColumnContainer style={{ margin: "20px 0 20px auto" }}>
                    <RightLink to="/signin">
                        Esqueci minha senha.
                    </RightLink>
                </ColumnContainer>

                <ColumnContainer>
                    <ButtonHighlight>
                        Sign In
                    </ButtonHighlight>
                </ColumnContainer>

                <ColumnContainer>
                    <RightText>Ainda não possui conta ?</RightText>
                    <RightLink to="/register">
                        Criar conta. 
                    </RightLink>
                </ColumnContainer>
            </Form>
        </>
    );
}

export default connector(SignIn);
