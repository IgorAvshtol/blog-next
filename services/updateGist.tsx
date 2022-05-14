export const updateGist = async (body: string) => {
  const requestOptions = {
    method: 'PATCH',
    headers: {
      'Authorization': process.env.NEXT_PUBLIC_AUTH_TOKEN as string,
      'Accept': 'application/vnd.github.v3+json',
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({files: {'Test gist': {content: body}}})
  };
  await fetch(process.env.NEXT_PUBLIC_BASE_URL as string, requestOptions);
};