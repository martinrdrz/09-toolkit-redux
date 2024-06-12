import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {
    const dispatch = useDispatch();
    const { page, isLoading, pokemons = [] } = useSelector((state) => state.pokemons);

    useEffect(() => {
        //Se utiliza un dispatch para disparar lo reducers, pero los mismos son sincronos y se necesita disparar
        //la funcion asincrona en thunks, por ello se llama a getPokemons()
        dispatch(getPokemons());
    }, []);

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading:{isLoading ? 'True' : 'False'}</span>
            <ul style={{ textAlign: 'left', listStylePosition: 'inside', paddingLeft: 0 }}>
                {pokemons.map(({ name }) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button disable={isLoading.toString()} onClick={() => dispatch(getPokemons(page))}>
                Next
            </button>
        </>
    );
};
