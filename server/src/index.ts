import config from './config';
import server from './server';
import { getConnection } from './packages/database';

const PORT = config.SERVER_PORT || '3000';

async function onStart(): Promise<any> {
  try {
    await getConnection();
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.log(err);
    throw err;
  }
}

server.listen(PORT, onStart);
// tslint:disable-next-line:no-console
console.log(`Server up and running on https://localhost:${PORT}`);
