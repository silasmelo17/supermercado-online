
import { connect, ConnectedProps } from 'react-redux';
import GlobalState from '../../types/GlobalState';



const mapStateToProps = (state: GlobalState) => ({
    token: state.authentication.token
});

const mapDispatchToProps = () => ({
    
});

const connector = connect( mapStateToProps, mapDispatchToProps );



export interface Props extends ConnectedProps<typeof connector> {
    method: 'post' | 'put',

    address?: {
        name?: string,
        cpf?: string,
        cep?: string,
        number?: number,
        complement?: string,
        references?: string,
        state?: string,
        city?: string,
        neighborhood?: string,
        street?: string
    }
}


export default connector;