
import { connect, ConnectedProps } from 'react-redux';
import GlobalState from '../../types/reduxState/GlobalState';

import * as thunksCart from '../../store/cart/thunks'



const mapStateToProps = (state: GlobalState) => ({
    cart: state.account.cart,
});

const mapDispatchToProps = (dispatch: any) => ({
    loadCart: () => dispatch( thunksCart.findCartProducts() ),
    
    removeProductInCart: (id: number, index: number) => 
        dispatch( thunksCart.removeProductInCart(id, index) )
});

const connector = connect(mapStateToProps, mapDispatchToProps);



type PropsFromRedux = ConnectedProps<typeof connector>;
export type Props = PropsFromRedux;

export default connector;
