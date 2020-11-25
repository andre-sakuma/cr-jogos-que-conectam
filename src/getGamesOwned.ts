import axios from 'axios';
import { OwnedGames } from './types';

export default async function getOwnedGames(
  user: string,
  key: string
): Promise<OwnedGames> {
  try {
    const { data } = await axios.get(
      `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1?key=${key}&steamid=${user}`
    );
    console.log(user + '   ok');
    return data.response;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
