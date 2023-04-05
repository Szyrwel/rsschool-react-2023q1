import { ResponseModel, ENDPOINT, Character } from 'interfaces';

export async function getAllCharacters(url: string): Promise<Character[]> {
  const res = await fetch(`${url}${ENDPOINT.allCharacters}`);
  const data = (await res.json()) as ResponseModel;
  console.log(data.data);

  return data.data;
}

// export async function getFilteredCharacters(url: string): Promise<Character[]> {
//   const res = await fetch();
// }
