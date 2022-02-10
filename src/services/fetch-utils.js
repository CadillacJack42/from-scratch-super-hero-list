import { client, checkError } from './client';

export const getAllHeroes = async (from, to) => {
  const response = await client.from('super_heroes').select().range(from, to);

  return checkError(response);
};
