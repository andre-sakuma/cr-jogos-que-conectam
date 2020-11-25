import { GoogleSpreadsheetRow } from 'google-spreadsheet';

export default function parseToAdjacencyArray(
  data: GoogleSpreadsheetRow[]
): string[][] {
  const result = data.map((user) => {
    const userRelations = data.map((aux) => {
      if (aux['Steam ID'] === user['Steam ID']) return '0';
      const userGames: string[] = JSON.parse(user['Games']);
      const auxGames: string[] = JSON.parse(aux['Games']);
      const gamesInCommon = userGames.filter((value: string) =>
        auxGames.includes(value)
      );
      return String(gamesInCommon.length);
    });
    userRelations.unshift(String(user['Steam ID']));
    return userRelations;
  });
  const headers: string[] = data.map((user) => {
    return user['Steam ID'];
  });
  headers.unshift('');
  result.unshift(headers);

  return result;
}
