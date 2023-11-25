import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(
    'G:/Level-2/first-project-with-mongoose-and-typescript',
    './.env',
  ),
});

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.USER_URL,
};
