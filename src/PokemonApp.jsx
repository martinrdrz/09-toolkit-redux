import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        //Se utiliza un dispatch para disparar lo reducers, pero los mismos son sincronos y se necesita disparar
        //la funcion asincrona en thunks, por ello se llama a getPokemons()
        dispatch(getPokemons());
    }, []);

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <ul>
                <li>hola</li>
                <li>hola</li>
                <li>hola</li>
            </ul>
        </>
    );
};
