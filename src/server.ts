import * as dotenv from 'dotenv';
dotenv.config();
import { app } from './app';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
  //   console.log(`Documentation at http://localhost:${PORT}/api/docs`);
});
