import * as fs from 'fs';
import * as path from 'path';

interface AppList {
  apps: App[]
}

interface App {
  appId: number,
  name: string
}

export default function createAppList(): AppList {
  const rawArchive = fs.readFileSync(path.resolve(__dirname, '../SteamAppList.json'));
  const archive = JSON.parse(rawArchive.toString());
  return archive.applist;
}