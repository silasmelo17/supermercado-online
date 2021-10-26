
import Address from "../../types/objects/Address";

import { FaEdit } from 'react-icons/fa';

import { AddressContainer, Text, EditAddress } from './styles';



function AddressComponent({ id, name, street, number, complement, neighborhood, city, state, cep }: Address) {
    return (
        <AddressContainer>
            <Text style={{ marginBottom: 8 }}>{name}</Text>
            <Text>{street}, {number}.</Text>
            <Text>{complement}</Text>
            <Text>{neighborhood}, {city} - {state}</Text>
            <Text>CEP: {cep}</Text>

            <EditAddress to={`/account/address/${id}`}>
                <FaEdit size={18} />
            </EditAddress>
        </AddressContainer>
    );
}

export default AddressComponent;
