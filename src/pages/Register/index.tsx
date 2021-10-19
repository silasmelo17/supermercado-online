
import { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import axios from '../../config/axios.config';

import connector, { Props } from "./connector";

import Header from '../../components/Header';

import { 
    Form,
    Label, Input, InputWithMask,
    Button, ButtonHighlight, 
    Container, ColumnContainer 
} from '../../components/Forms/styles';

import { ValidationStep } from './styles';
import { AxiosError, AxiosResponse } from 'axios';

import User from '../../types/objects/User';



function Register({ auth, ocultHeader }: Props) {
    const [ name, setName ] = useState<string>('');
    const [ last_name, setLastName ] = useState<string>('');
    const [ cpf, setCpf ] = useState<string>('');
    const [ phone, setPhone ] = useState<string>('');
    const [ birthday, setBirthday ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ confirmEmail, setConfirmEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ confirmPassword, setConfirmPassword ] = useState<string>('');

    const [ message, setMessage ] = useState<string>('');

    const [ successName, setSuccessName ] = useState<boolean | undefined>();
    const [ successLastName, setSuccessLastName ] = useState<boolean | undefined>();
    const [ successCPF, setSuccessCPF ] = useState<boolean | undefined>();
    const [ successPhone, setSuccessPhone ] = useState<boolean | undefined>();
    const [ successBirthday, setSuccessBirthday ] = useState<boolean | undefined>();
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


    useEffect( () => { ocultHeader() }, [ocultHeader]);

    

    const onSubmitRegister = async (event: FormEvent) => {
        event.preventDefault();

        axios.post<any, AxiosResponse<User>>( '/user/register', {
            name, 
            last_name, 
            email, 
            cpf: cpf.replaceAll(/[^0-9]/g, ''), 
            phone: phone.replaceAll(/[^0-9]/g, ''), 
            password,
            birthday
        })
        .then( (response) => {
            if(response.status === 201) {
                setMessage('Usuário cadastrado com sucesso.');
            }
        })
        .catch( (err: AxiosError<any>) => {
            const responseError = err.response;

            setMessage( responseError?.data.message );
        });
    }



    const onBlurSuccessName = () => setSuccessName( () => {
        return name.length === 0 
            ? undefined
            : name.length > 1
    });

    const onBlurSuccessLastName = () => setSuccessLastName( () => {
        return last_name.length === 0 
            ? undefined
            : last_name.length > 2
    });

    const onBlurSuccessCPF = () => setSuccessCPF( () => {
        return cpf.length === 0 
            ? undefined 
            : cpf.replaceAll(/[^0-9]/g, '').length === 11
    });

    const onBlurSuccessPhone = () => setSuccessPhone( () => {
        return phone.length === 0 
            ? undefined 
            : phone.replaceAll(/[^0-9]/g, '').length === 11
    });

    const onBlurSuccessBirthday = () => {
        const date = new Date(birthday);
        const current = new Date();

        const year = current.getFullYear() - date.getFullYear();
        const month = current.getMonth() - date.getMonth();
        const day = current.getDay() - date.getDay();

        const difference = new Date( 
            current.getFullYear() - year, 
            current.getMonth() - month, 
            current.getDay() - day
        );

        setSuccessBirthday( () => (current.getFullYear() - difference.getFullYear()) >= 18 )
    };

    const onBlurSuccessPassword = () => setSuccessEmail( () => {
        return email.length === 0
            ? undefined
            : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    });



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
        const successesStates = [ 
            successName, successLastName, 
            successCPF, successPhone, successBirthday, 
            successEmail, successConfirmEmail, 
            successPassword, successConfirmPassword 
        ];
        const someError = successesStates.filter( s => (s === undefined || s === false) );

        setDisabledButton( someError.length !== 0 );
    }, [ 
        successName, successLastName, 
        successCPF, successPhone, successBirthday, 
        successEmail, successConfirmEmail, 
        successPassword, successConfirmPassword 
    ]);



    return(<>
        <Header />
        <Form onSubmit={onSubmitRegister} autoComplete="off" >
            <ColumnContainer>
                <Label>Nome</Label>
                <Input 
                    type="text" 
                    value={name}
                    success={successName}
                    onChange={ e => setName(e.target.value)}
                    onBlur={onBlurSuccessName}
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
                    onBlur={onBlurSuccessLastName}
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
                    onBlur={onBlurSuccessCPF}
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
                    onBlur={onBlurSuccessPhone}
                    placeholder="Informe seu telefone"
                />
            </ColumnContainer>

            <ColumnContainer>
                <Label>Data de nascimento</Label>
                <Input 
                    type="date"
                    success={successBirthday}
                    value={birthday}
                    onChange={ e => setBirthday(e.target.value)}
                    onBlur={onBlurSuccessBirthday}
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
                    onBlur={onBlurSuccessPassword}
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

            <Container>
                <Link to="/signin">
                    Já possui cadastro ? Faça o login.
                </Link>
            </Container>

            { message !== '' && <Container>
                <span>{message}</span>
            </Container>}

            <Container style={{ marginTop: 60 }}>
                <Button>Limpar</Button>
                <ButtonHighlight disabled={disabledButton} >
                    Cadastrar
                </ButtonHighlight>
            </Container>
        </Form>
    </>);
}

export default connector(Register);
