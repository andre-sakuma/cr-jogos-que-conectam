import createAppList from './src/createAppList'
import getUserFriends from './src/getUserFriends'
import getGamesOwned from './src/getGamesOwned'
import populateSheet from './src/populateSheet'

async function main(user: string, key: string) {
  try {
    // const appList = createAppList();
    const friends = await getUserFriends(user, key);
    for (const friend of friends) {
      const games = await getGamesOwned(friend.id, key);
      friend.games = games
    }
    await populateSheet(friends);
  } catch (error) {
    throw error
  }
}

const steamid = 'your steamid here';
const key = 'steam web api key here';

main(steamid, key);