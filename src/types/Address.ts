
interface Address {
    id: number,
    name: string,
    cpf: string,
    cep: string,
    number: number,
    complement: string,
    references?: string,

    state?: string,
    city?: string,
    neighborhood?: string,
    street?: string,

    user_id: number
}



export default Address;
