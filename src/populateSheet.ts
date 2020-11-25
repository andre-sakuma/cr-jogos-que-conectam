import * as creds from '../credentials.json';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { Friend } from './types';

export default async function populateSheet(users: Friend[]): Promise<void> {
  const doc = new GoogleSpreadsheet(process.env.SHEET_ID);
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo(); // loads sheets
  const sheet = doc.sheetsByIndex[0]; // the first sheet

  for (const user of users) {
    if (!user.games.games) continue;
    const rawGames = user.games.games.map((game) => game.name);

    const parsedGames = JSON.stringify(rawGames, null, '\t');
    await sheet.addRow({
      'Steam ID': user.id,
      Games: parsedGames,
      Total: user.games.total_count,
    });
    console.log('user:' + user.id + 'was saved');
  }
}
