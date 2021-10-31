
import { connect, ConnectedProps } from 'react-redux';
import GlobalState from '../../types/reduxState/GlobalState';

import * as FavoritesThunks from '../../store/favorites/thunks';
import * as FavoritesActions from '../../store/favorites/actions';

import * as ThunksCart from '../../store/cart/thunks';



const mapStateToProps = (state: GlobalState ) => ({
    favorites: state.account?.favorites,
    auth: state.authentication.auth
});

const mapDispatchToProps = (dispatch: any) => ({
    loadFavorites: () => dispatch(FavoritesThunks.findFavoritesProducts()),
    removeProduct: (id: number, index: number) => dispatch(FavoritesThunks.removeFavoriteFromList(id, index)),
    incrementFavorites: () => dispatch(FavoritesThunks.incrementFavorites()),
    resetFavorites: () => dispatch(FavoritesActions.resetFavorites())
});

const connector = connect(mapStateToProps,mapDispatchToProps);



export type Props = ConnectedProps<typeof connector>;

export default connector;
