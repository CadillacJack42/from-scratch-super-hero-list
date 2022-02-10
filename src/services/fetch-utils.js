import { client, checkError } from './client';

export const getAllHeroes = async (from, to) => {
  const response = await client.from('super_heroes').select().range(from, to);

  return checkError(response);
};

export const getHeroById = async (id) => {
  const response = await client.from('super_heroes').select().match({ id }).single();

  return response.data;
};
export const filterHeroes = async (column, query) => {
  const response = await client.from('super_heroes').select().textSearch(column, `${query}`);
  console.log(response);
  return checkError(response);
};
