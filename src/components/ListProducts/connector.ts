
import { connect, ConnectedProps } from "react-redux";

import GlobalState from "../../types/reduxState/GlobalState";



const mapStateToProps = (state: GlobalState) => ({
    products: state.products.data
});

const connector = connect(mapStateToProps );



type PropsFromRedux = ConnectedProps<typeof connector>

export interface Props extends PropsFromRedux {}

export default connector;
