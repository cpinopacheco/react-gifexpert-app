import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //hook useState - setCategories renderiza nuevamente el componente (crea un nuevo estado pisando el anterior)
  const [categories, setCategories] = useState(["broly"]);

  /* const handleAdd = () => {
    //De esta manera traemos todo lo que tenia el usestate y le agregamos un nuevo elemento.
    setCategories([...categories, "HunterXHunter"]);
    //Otra manera de hacerlo.
    //setCategories(cats => [...cats,"HunterXHunter"]);
  }; */

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {categories.map((category) => (
        //por cada elemento de categories llama al compente gifGrid
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
