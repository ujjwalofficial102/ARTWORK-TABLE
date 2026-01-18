export const fetchArtworksPage = async (page: number) => {
  const res = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}`);
  const resData = await res.json();
  return resData;
};
