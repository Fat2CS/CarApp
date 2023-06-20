export async function fetchImage() {
  const headers = {
    "X-RapidAPI-Key": "50a5dc2aadmshcb3f6887c40dd58p173dc3jsnad9d46db6f33",
    "X-RapidAPI-Host": "ai_image-database.p.rapidapi.com"
  };

  const response = await fetch(
    "https://ai_image-database.p.rapidapi.com/images/midjourney",
    {
      headers: headers
    }
  );

  const result = await response.json();
  return result;
}
