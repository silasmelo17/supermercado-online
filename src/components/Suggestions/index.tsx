
import { Link } from 'react-router-dom';

import { SuggestionContainer, Suggestion, SuggestionImage, SuggestionName } from './styles';

import connector, { Props } from './connector';



function Suggestions( { suggestions }: Props) {
    return(
        <SuggestionContainer>
            {suggestions.map( product => (
                <Link to={`/products/${product.id}`}>
                    <Suggestion>
                        <SuggestionImage src={product.image_src} />
                        <SuggestionName>
                            {product.name}
                        </SuggestionName>
                    </Suggestion>
                </Link>
            ))}
        </SuggestionContainer>
    );
}

export default connector(Suggestions); 
