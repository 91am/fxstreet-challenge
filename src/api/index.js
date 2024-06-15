const API_URL = "https://run.mocky.io/v3/96314262-67b1-455b-a2b2-ef1711d4634c";

export async function getPosts() {
  const response = await fetch(API_URL);
  const posts = await response.json();
  return posts;
}
