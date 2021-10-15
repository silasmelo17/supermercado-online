
import { PropsWithChildren } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import GlobalState from '../../types/GlobalState';



const mapStateToProps = (state: GlobalState) => ({ 
    user: state.account.user
});

const connector = connect( mapStateToProps);



type PropsFromRedux = ConnectedProps<typeof connector>;

export interface Props extends PropsWithChildren<PropsFromRedux> {
    title?: string,
    subtitle?: string
};



export default connector;
