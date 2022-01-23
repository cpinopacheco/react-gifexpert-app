import React from "react"; //snippets rafc crea el componente de manera automatica.
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGRidItem } from "./GifGRidItem";

export const GifGrid = ({ category }) => {
  //data:images los : son para renombrar la propiedad
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {/* si la variable es true entonces escribe el parrafo, sino. no hace nada */}
      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}

      <div className="card-grid">
        {images.map((img) => (
          <GifGRidItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
