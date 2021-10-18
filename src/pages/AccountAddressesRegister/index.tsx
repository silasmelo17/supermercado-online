
import { useEffect, useState, Dispatch, SetStateAction } from "react";

import TemplateAccount from "../../templates/TemplateAccount";
import connector, { Props } from "./connector";

import { 
    Label, Input, InputWithMask, 
    Container, ColumnContainer, 
    ButtonHighlight, Button 
} from '../../components/Forms/styles';

import {
    ToggleCEPMode
} from './styles';

import api from '../../config/axios.config';
import axios, { AxiosError } from "axios";



function AccountAddressesRegister( { token }: Props ) {
    const [ name, setName ] = useState<string>('');
    const [ cpf, setCPF ] = useState<string>('');
    const [ cep, setCEP ] = useState<string>('');
    const [ state, setState ] = useState<string>('');
    const [ city, setCity ] = useState<string>('');
    const [ neighborhood, setNeighborhood ] = useState<string>('');
    const [ street, setStreet ] = useState<string>('');
    const [ number, setNumber ] = useState<number>();
    const [ complement, setComplement ] = useState<string>('');
    const [ references, setReferences ] = useState<string>('');

    const [ successName, setSuccessName ] = useState<boolean | undefined>();
    const [ successCPF, setSuccessCPF ] = useState<boolean | undefined>();
    const [ successCEP, setSuccessCEP ] = useState<boolean | undefined>();
    const [ successState, setSuccessState ] = useState<boolean | undefined>();
    const [ successCity, setSuccessCity ] = useState<boolean | undefined>();
    const [ successNeighborhood, setSuccessNeighborhood ] = useState<boolean | undefined>();
    const [ successStreet, setSuccessStreet ] = useState<boolean | undefined>();
    const [ successNumber, setSuccessNumber ] = useState<boolean | undefined>();
    const [ successComplement, setSuccessComplement ] = useState<boolean | undefined>();

    const [ withCEP, setWithCEP ] = useState<boolean>(true);


    
    const resetSomeSucessFields = () => {
        setSuccessState( state.length === 0 ? undefined : state.length === 2 );
        setSuccessCity( city.length === 0 ? undefined : city.length > 2);
        setSuccessNeighborhood( neighborhood.length === 0 ? undefined: neighborhood.length > 2 );
        setSuccessStreet( street.length === 0 ? undefined: street.length > 2);
    }

    const resetSomeFields = () => {
        setState('');
        setCity('');
        setNeighborhood('');
        setStreet('');

        resetSomeSucessFields();
    }



    const onBlurCEP = async () => {
        try{
            if(cep.replace('-','').length === 8) {
                const url = `https://viacep.com.br/ws/${cep}/json`
                const address = await axios.get<any>(url);
                
                if(address.data.erro) {
                    setSuccessCEP(false);
                    resetSomeFields();
                } else {
                    const { uf, logradouro, localidade, bairro  } = address.data
                    
                    setState(uf);
                    setSuccessState(true);

                    setCity(localidade);
                    setSuccessCity(true);

                    setNeighborhood(bairro);
                    setSuccessNeighborhood(true);

                    setStreet(logradouro);
                    setSuccessStreet(true);

                    setSuccessCEP(true);
                }
            } else {
                setSuccessCEP( cep.length === 0 ? undefined: false );
                resetSomeFields();
            }
        }catch(err) {
            setSuccessCEP( cep.length === 0 ? undefined: false );
            resetSomeFields();
        }
    }


    type onBlurMinimumLengthType = ( current: string, setCurrent: Dispatch<SetStateAction<boolean | undefined>>, minimum: number ) => () => void 

    const onBlurMinimumLength: onBlurMinimumLengthType = ( current, setCurrent, minimum ) => () =>
        setCurrent(() => {
            return current.length === 0
                ? undefined
                : current.length > minimum
        });



    const onBlurSuccessName = onBlurMinimumLength( name, setSuccessName, 3 );
    const onBlurSuccessCity = onBlurMinimumLength( city, setSuccessCity, 2 );
    const onBlurSuccessNeighborhood = onBlurMinimumLength( neighborhood, setSuccessNeighborhood, 2 );
    const onBlurSuccessStreet = onBlurMinimumLength( street, setSuccessStreet, 2 );
    const onBlurSuccessComplement = onBlurMinimumLength( complement, setSuccessComplement, 2 );



    const onBlurSuccessCPF = () => setSuccessCPF( () => {
        return cpf.length === 0
            ? undefined
            : cpf.replace( /[^0-9]/g, '' ).length === 11
    });

    const onBlurSuccessState = () => setSuccessState( () => {
        return state.length === 0
            ? undefined
            : state.length === 2
    });

    const onBlurSuccessNumber = () => setSuccessNumber(() => {
        return number 
            ? number >= 0 && number <= 9999
            : undefined
    });



    useEffect( () => {
        setCEP('')
        resetSomeFields();
    }, [withCEP]);



    const onClickSaveAddress = () => {
        const successes = [ successName, successCPF, successCEP, successNumber, successComplement ]

        const success = successes.find( value => value === false ) || true;

        if( success ) {
            const body = { name, cpf, cep, complement, references, number }
            const headers = { headers: { token } }

            api.post( '/addresses', body, headers )
                .then( result => {
                    if(result.status === 201 ) {
                        alert("usuário cadastrado com sucesso.");
                    }
                })
                .catch( (err: AxiosError<{ message: string }>) => {
                    if(err.response)
                        alert(err.response.data.message)
                });
        }
    }



    return(
        <TemplateAccount title='Endereços' subtitle='Registrar endereço'>
            <Container>
                <ColumnContainer style={{ flex: 1}} >
                    <Label>Destinatário</Label>
                    <Input
                        type="text" 
                        value={name}
                        success={successName}
                        onChange={ e => setName(e.target.value) }
                        onBlur={onBlurSuccessName}
                    />
                </ColumnContainer>

                <ColumnContainer>
                    <Label>CPF</Label>
                    <InputWithMask
                        mask="999.999.999-99"
                        success={successCPF} 
                        value={cpf} 
                        onChange={ e => setCPF(e.target.value) }
                        onBlur={onBlurSuccessCPF}
                    />
                </ColumnContainer>
            </Container>

            <Container>
                <ColumnContainer style={{ maxWidth: 150 }}>
                    <Label>CEP</Label>
                    <InputWithMask
                        mask="99999-999" 
                        disabled={(!withCEP)} 
                        success={successCEP}
                        value={cep} 
                        onChange={ e => setCEP(e.target.value) }
                        onBlur={onBlurCEP}
                    />
                </ColumnContainer>

                <ColumnContainer style={{ maxWidth: 150 }}>
                    <Label>Estado</Label>
                    <Input
                        type="text" 
                        disabled={withCEP} 
                        value={state} 
                        success={successState}
                        onChange={ e => setState(e.target.value) }
                        onBlur={onBlurSuccessState}
                    />
                </ColumnContainer>

                <ColumnContainer style={{ flex: 1 }}>
                    <Label>Cidade</Label>
                    <Input
                        type="text" 
                        disabled={withCEP} 
                        success={successCity}
                        value={city}
                        onChange={ e => setCity(e.target.value) } 
                        onBlur={onBlurSuccessCity}
                    />
                </ColumnContainer>
            </Container>

            <Container>
                <ColumnContainer>
                    <Label>Bairro</Label>
                    <Input
                        type="text" 
                        value={neighborhood}
                        disabled={withCEP}
                        success={successNeighborhood}
                        onChange={ e => setNeighborhood(e.target.value) }
                        onBlur={onBlurSuccessNeighborhood}
                    />
                </ColumnContainer>
                <ColumnContainer style={{ flex: 1 }}>
                    <Label>Logradouro</Label>
                    <Input
                        type="text" 
                        value={street} 
                        disabled={withCEP}
                        success={successStreet}
                        onChange={ e => setStreet(e.target.value) } 
                        onBlur={onBlurSuccessStreet}
                    />
                </ColumnContainer>

                <ColumnContainer style={{ maxWidth: 150 }}>
                    <Label>Número</Label>
                    <Input
                        type="number" 
                        value={number}
                        max={9999} maxLength={4} 
                        success={successNumber}
                        onChange={ e => setNumber( Number(e.target.value) ) }
                        onBlur={onBlurSuccessNumber}
                    />
                </ColumnContainer>
            </Container>

            <ColumnContainer style={{ marginTop: 10, justifyContent: 'flex-end' }}>
                <ToggleCEPMode onClick={() => setWithCEP( old => !old )} >
                    { withCEP 
                        ? 'Não sei meu CEP.'
                        : 'Não sei meu endereço.' 
                    }
                </ToggleCEPMode>
            </ColumnContainer>

            <ColumnContainer>
                <Label>Complemento</Label>
                <Input
                    type="text" 
                    value={complement} 
                    success={successComplement}
                    onChange={ e => setComplement(e.target.value) }
                    onBlur={onBlurSuccessComplement}
                />
            </ColumnContainer>

            <ColumnContainer >
                <Label>Referência</Label>
                <Input
                    type="text" 
                    value={references}
                    onChange={ e => setReferences(e.target.value) }
                />
            </ColumnContainer>

            <Container > 
                <Button>
                    Limpar campos
                </Button>
                <ButtonHighlight 
                    style={{ marginLeft: 10 }} 
                    onClick={onClickSaveAddress}
                >
                    Registrar endereço
                </ButtonHighlight>
            </Container>
        </TemplateAccount>
    );
}

export default connector(AccountAddressesRegister);