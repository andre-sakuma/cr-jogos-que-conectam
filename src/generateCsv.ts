import * as fs from 'fs';
import * as path from 'path';

export default function generateCsv(array: string[][]): void {
  const joinedColums = array.map((row) => {
    return row.join(',');
  });
  const result = joinedColums.join('\n');
  fs.writeFileSync(path.resolve(__dirname, './adjacencyArray.csv'), result);
}
