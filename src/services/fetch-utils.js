import { client, checkError } from './client';

export const getAllHeroes = async () => {
  const response = await client.from('super_heroes').select();

  return checkError(response);
};
