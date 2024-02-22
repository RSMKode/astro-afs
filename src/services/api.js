// import animeData from "@/data/animes.json";

export async function getAnimeById(animeId) {
  const anime = await fetch("https://api.jikan.moe/v4/anime/" + animeId).then(
    (res) => res.json()
  );
  return anime.data;
}

export async function getAnimesByName(animeId) {
  const animes = await fetch(
    "https://api.jikan.moe/v4/anime?q=" + animeId
  ).then((res) => res.json());

  console.log(animes);
}

// export async function getAnimes(animeData) {
//   return Promise.all(
//     animeData.map(async (element) => {
//       let animes = await Promise.all(
//         element.animeIdList.map(async (animeId) => {
//           return await getAnimeById(animeId);
//         })
//       );

//       return { genre: element.genre, animes };
//     })
//   );
// }
