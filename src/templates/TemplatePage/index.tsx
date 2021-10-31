
import { useEffect } from 'react';

import connector, { Props } from "./connector";

import { Main } from '../../components/Main';
import Header from "../../components/Header";



function TemplatePage( { visibleHeader, checkTokenAuthentication, column, children }: Props ) {
    useEffect( () => visibleHeader(), [visibleHeader]);

    return(<>
        <Header />
        
        <Main column={column ? true: false}>
            {children}
        </Main>
    </>);
}

export default connector(TemplatePage);
