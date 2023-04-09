import { ResponseModel, ENDPOINT, Character } from 'interfaces';

export async function getAllCharacters(
  url: string,
  page?: number
): Promise<Character[]> {
  if (!page) {
    const res = await fetch(`${url}${ENDPOINT.allCharacters}`);
    const data = (await res.json()) as ResponseModel;
    return data.data;
  } else {
    const res = await fetch(`${url}${ENDPOINT.allCharacters}?page=${page}`);
    const data = (await res.json()) as ResponseModel;
    return data.data;
  }
}

export async function getFilteredCharacters(
  url: string,
  value: string
): Promise<Character[]> {
  const res = await fetch(`${url}${ENDPOINT.filterCharacters}${value}`);
  const data = (await res.json()) as ResponseModel;
  return data.data;
}

export async function getOneCharacter(
  url: string,
  id: number
): Promise<Character> {
  const res = await fetch(`${url}${ENDPOINT.allCharacters}/${id}`);
  return await res.json();
}
