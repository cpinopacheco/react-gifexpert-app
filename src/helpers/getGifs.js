//un helpers es una funcion que ayuda a resolver una tarea especifica
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=0XLn9HP3IQYdgZ2nAz6BaSShOiZiRQB1`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url, // - ? si viene la url la utiliza
    };
  });

  return gifs;
};
