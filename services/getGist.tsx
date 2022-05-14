export const getGist = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL as string, {
    method: 'GET',
    headers: {
      'Authorization': process.env.NEXT_PUBLIC_AUTH_TOKEN as string,
      'Accept': 'application/vnd.github.v3+json',
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return await response.json();
};