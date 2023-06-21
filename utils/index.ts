// export async function fetchImage() {
//   const headers = {
//     "X-RapidAPI-Key": "50a5dc2aadmshcb3f6887c40dd58p173dc3jsnad9d46db6f33",
//     "X-RapidAPI-Host": "ai_image-database.p.rapidapi.com"
//   };

//   const response = await fetch(
//     "https://ai_image-database.p.rapidapi.com/images/midjourney",
//     {
//       headers: headers
//     }
//   );

//   const result = await response.json();
//   return result;
// }
// export async function fetchImage() {
//   const headers = {
//     "X-RapidAPI-Key": "50a5dc2aadmshcb3f6887c40dd58p173dc3jsnad9d46db6f33",
//     "X-RapidAPI-Host": "ai_image-database.p.rapidapi.com"
//   };

//   const limit = 5; // Limite de 100 images
//   const images = [];

//   let offset = 0;
//   while (images.length < limit) {
//     const params = {
//       limit: limit - images.length,
//       offset: offset
//     };

//     const url = new URL(
//       "https://ai_image-database.p.rapidapi.com/images/midjourney"
//     );
//     url.search = new URLSearchParams(params).toString();

//     const response = await fetch(url.toString(), {
//       headers: headers
//     });

//     const result = await response.json();
//     images.push(...result);

//     offset += result.length;
//     if (result.length === 0) {
//       break; // Sort de la boucle si aucun résultat n'est retourné
//     }
//   }

//   return images;
// }
export async function fetchImage() {
  const headers = {
    "X-RapidAPI-Key": "50a5dc2aadmshcb3f6887c40dd58p173dc3jsnad9d46db6f33",
    "X-RapidAPI-Host": "ai_image-database.p.rapidapi.com"
  };

  const limit = 5; // Limite de 5 images à afficher
  const images = [];

  let offset = 0;
  while (images.length < limit) {
    const params = {
      limit: limit - images.length,
      offset: offset
    };

    const url = new URL(
      "https://ai_image-database.p.rapidapi.com/images/midjourney"
    );
    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url.toString(), {
      headers: headers
    });

    const result = await response.json();
    images.push(...result.slice(0, limit - images.length)); // Utilisation de slice() pour limiter le nombre d'images à afficher

    offset += result.length;
    if (result.length === 0) {
      break; // Sort de la boucle si aucun résultat n'est retourné
    }
  }

  return images;
}
