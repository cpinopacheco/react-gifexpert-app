import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//Los custom hook funcionan como que fueran functional component
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  //cuando se carga el componente por primera vez, realiza la petición para obtener los gifs y los coloca en las imagenes.
  //cada vez que hacemos un cambio en el estado de componente se vuelve a ejecutar el useEffect();
  //Se dispara solo cuando cambia la categoria
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state; // {data: [], loading: true}
};
