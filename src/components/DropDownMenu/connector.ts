
import { connect, ConnectedProps } from "react-redux";
import GlobalState from "../../types/reduxState/GlobalState";



const mapStateToProps = (state: GlobalState ) => ({
    categories: state.header.categories
});

const connector = connect( mapStateToProps);



export interface Props extends ConnectedProps<typeof connector> {
    visible: boolean
};

export default connector;
