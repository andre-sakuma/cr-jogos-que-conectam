import getUserFriends from './src/getUserFriends';
import getGamesOwned from './src/getGamesOwned';
import populateSheet from './src/populateSheet';
import getSheetData from './src/getSheetData';
import parseToAdjacencyArray from './src/parseToAdjacencyArray';
import generateCsv from './src/generateCsv';

async function main(user: string, key: string) {
  try {
    const friends = await getUserFriends(user, key);
    for (const friend of friends) {
      const games = await getGamesOwned(friend.id, key);
      friend.games = games;
    }

    await populateSheet(friends);

    await generateGraph();
  } catch (error) {
    throw error;
  }
}

async function generateGraph() {
  const data = await getSheetData();
  const adjacencyArray = parseToAdjacencyArray(data);
  generateCsv(adjacencyArray);
  return;
}

const steamid = process.env.STEAM_ID;
const key = process.env.STEAM_API_KEY;

main(steamid, key);
