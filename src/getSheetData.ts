import * as creds from '../credentials.json';
import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';

export default async function populateSheet(): Promise<GoogleSpreadsheetRow[]> {
  const doc = new GoogleSpreadsheet(process.env.SHEET_ID);
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo(); // loads sheets
  const sheet = doc.sheetsByIndex[0]; // the first sheet
  const rows = await sheet.getRows();
  return rows;
}
