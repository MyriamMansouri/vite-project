import { connection } from './connection';

const getUserTable = () => connection.table('user');

export async function getUser(id: any) {
  return await getUserTable().first().where({ id });
}

export async function getUserByEmail(email: any) {
  return await getUserTable().first().where({ email });
}
