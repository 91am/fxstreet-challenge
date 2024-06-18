const API_URL = "https://fxsfrontend.fxstreet.workers.dev/";

export async function getPosts() {
  const response = await fetch(API_URL);
  const posts = await response.json();
  return posts;
}
