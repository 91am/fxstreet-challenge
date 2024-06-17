const API_URL = "https://run.mocky.io/v3/4bf32463-129c-4c66-9755-3e5b412b9f35";

export async function getPosts() {
  const response = await fetch(API_URL);
  const posts = await response.json();
  return posts;
}
