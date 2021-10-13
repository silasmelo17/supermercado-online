
import { useState, useEffect, FormEvent } from 'react';

import axios from '../../config/axios.config';

import connector, { Props } from "./connector";

import { 
    Form,
    Label, Input, InputWithMask,
    Button, ButtonHighlight, 
    Container, ColumnContainer 
} from '../../components/Forms/styles';

import { ValidationStep } from './styles';
import { Axios, AxiosError } from 'axios';



function Register({ auth }: Props) {
    const [ name, setName ] = useState<string>('');
    const [ last_name, setLastName ] = useState<string>('');
    const [ cpf, setCpf ] = useState<string>('');
    const [ phone, setPhone ] = useState<string>('');
    const [ birthday, setBirthday ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ confirmEmail, setConfirmEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ confirmPassword, setConfirmPassword ] = useState<string>('');

    const [ messageError, setMessageError ] = useState<string>('');

    const [ successName, setSuccessName ] = useState<boolean | undefined>();
    const [ successLastName, setSuccessLastName ] = useState<boolean | undefined>();
    const [ successCPF, setSuccessCPF ] = useState<boolean | undefined>();
    const [ successPhone, setSuccessPhone ] = useState<boolean | undefined>();
    const [ successEmail, setSuccessEmail ] = useState<boolean | undefined>();
    const [ successConfirmEmail, setSuccessConfirmEmail ] = useState<boolean | undefined>();
    const [ successPassword, setSuccessPassword ] = useState<boolean | undefined>();
    const [ successConfirmPassword, setSuccessConfirmPassword ] = useState<boolean | undefined>();

    const [ validationLength, setValidationLength ] = useState<boolean>(false);
    const [ validationUppercase, setValidationUppercase ] = useState<boolean>(false);
    const [ validationLowercase, setValidationLowercase ] = useState<boolean>(false);
    const [ validationNumber, setValidationNumber ] = useState<boolean>(false);
    const [ validationSpecial, setValidationSpecial ] = useState<boolean>(false);

    const [ disabledButton, setDisabledButton ] = useState<boolean>(false);

    const successesStates = [ successName, successLastName, successCPF, successPhone, successEmail, successConfirmEmail, successPassword, successConfirmPassword]



    const onSubmitRegister = (event: FormEvent) => {
        event.preventDefault();

        (async () => {
            const result = await axios({
                method: "post",
                url: 'http://localhost:3000/api/user/register',
                data: {
                    name, 
                    last_name, 
                    email, 
                    cpf: cpf.replaceAll(/[^0-9]/g, ''), 
                    phone: cpf.replaceAll(/[^0-9]/g, ''), 
                    password,
                    birthday
                }
            })
            .then( r => r )
            .catch( (err: AxiosError<any>) => {
                const responseError = err.response;

                setMessageError( responseError?.data.message );
            })

            console.log(result);
        })();
    }



    useEffect( () => setSuccessName( () => {
        return name.length === 0 
            ? undefined
            : name.length > 1
    }), [name]);

    useEffect( () => setSuccessLastName( () => {
        return last_name.length === 0 
            ? undefined
            : last_name.length > 2
    }), [last_name]);

    useEffect( () => setSuccessCPF( () => {
        return cpf.length === 0 
            ? undefined 
            : cpf.replaceAll(/[^0-9]/g, '').length === 11
    }), [cpf] );

    useEffect( () => setSuccessPhone( () => {
        return phone.length === 0 
            ? undefined 
            : phone.replaceAll(/[^0-9]/g, '').length === 11
    }), [phone] );

    useEffect( () => setSuccessPassword( () => {
        return password.length === 0 
            ? undefined
            : validationLength && validationUppercase && validationLowercase && validationNumber && validationSpecial
    }), [validationLength, validationUppercase, validationLowercase, validationNumber, validationSpecial]);

    useEffect( () => setSuccessConfirmPassword( () => {
        return confirmPassword.length === 0 
            ? undefined
            : password === confirmPassword 
    }), [confirmPassword, password]);

    useEffect( () => setSuccessEmail( () => {
        return email.length === 0
            ? undefined
            : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }), [email]);

    useEffect( () => setSuccessConfirmEmail( () => {
        return confirmEmail.length === 0 
            ? undefined
            : email === confirmEmail
    }), [email, confirmEmail] );

    useEffect( () => {
        setValidationLength(password.length >= 8);
        setValidationUppercase(/[A-Z]/.test(password));
        setValidationLowercase(/[a-z]/.test(password));
        setValidationNumber(/\d/.test(password));
        setValidationSpecial(/\W/.test(password));
    }, [password]);

    useEffect( () => {
        const someError = successesStates.filter( s => (s === undefined || s === false) );

        setDisabledButton( someError.length !== 0 );
    }, successesStates );


    return(
        <Form onSubmit={onSubmitRegister} autoComplete="off" >
            <ColumnContainer>
                <Label>Nome</Label>
                <Input 
                    type="text" 
                    value={name}
                    success={successName}
                    onChange={ e => setName(e.target.value)}
                    placeholder="Informe seu nome"
                />
            </ColumnContainer>

            <ColumnContainer>
                <Label>Sobrenome</Label>
                <Input 
                    type="text" 
                    value={last_name}
                    success={successLastName}
                    onChange={ e => setLastName(e.target.value)}
                    placeholder="Informe seu sobrenome"
                />
            </ColumnContainer>

            <ColumnContainer>
                <Label>CPF</Label>
                <InputWithMask 
                    type="text"
                    mask="999.999.999-99"
                    success={successCPF}
                    value={cpf}
                    onChange={ e => setCpf(e.target.value)}
                    placeholder="Informe seu CPF"
                />
            </ColumnContainer>

            <ColumnContainer>
                <Label>Telefone</Label>
                <InputWithMask 
                    type="text"
                    mask="(99)99999-9999"
                    success={successPhone}
                    value={phone}
                    onChange={ e => setPhone(e.target.value)}
                    placeholder="Informe seu telefone"
                />
            </ColumnContainer>

            <ColumnContainer>
                <Label>Data de nascimento</Label>
                <Input 
                    type="date"
                    success={successPhone}
                    value={birthday}
                    onChange={ e => setBirthday(e.target.value)}
                />
            </ColumnContainer>

            <ColumnContainer>
                <Label>Email</Label>
                <Input 
                    type="email" 
                    value={email}
                    success={successEmail}
                    onChange={e => setEmail(e.target.value)}
                    onCopy={e => e.preventDefault()}
                    placeholder="Informe seu email"
                />
            </ColumnContainer>
            
            <ColumnContainer>
                <Label>Confirmar email</Label>
                <Input 
                    type="email" 
                    success={successConfirmEmail}
                    value={confirmEmail}
                    onChange={ e => setConfirmEmail(e.target.value)}
                    onPaste={e => e.preventDefault()}
                    placeholder="Confirme seu email"
                />
            </ColumnContainer>

            <ColumnContainer>
                <Label>Senha</Label>
                <Input 
                    type="password" 
                    value={password}
                    success={successPassword}
                    onChange={e => setPassword(e.target.value)}
                    onCopy={e => e.preventDefault()}
                    placeholder="Informe uma senha"
                />
            </ColumnContainer>

            { !successPassword && <ColumnContainer>
                { !validationLength && <ValidationStep>8 caracteres. </ValidationStep>}
                { !validationLowercase && <ValidationStep>1 letra minuscula.</ValidationStep>}
                { !validationUppercase && <ValidationStep>1 letras maisculas.</ValidationStep>}
                { !validationNumber && <ValidationStep>1 número.</ValidationStep>}
                { !validationSpecial && <ValidationStep>1 caracter especial.</ValidationStep>}
            </ColumnContainer>}
            
            <ColumnContainer>
                <Label>Confirmar senha</Label>
                <Input 
                    type="password" 
                    value={confirmPassword}
                    success={successConfirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    onPaste={e => e.preventDefault()}
                    placeholder="Confirme sua senha"
                />
            </ColumnContainer>

            { messageError !== '' && <Container>
                <span>{messageError}</span>
            </Container>}

            <Container style={{ marginTop: 60 }}>
                <Button>Limpar</Button>
                <ButtonHighlight disabled={disabledButton} >
                    Cadastrar
                </ButtonHighlight>
            </Container>
        </Form>
    );
}

export default connector(Register);
