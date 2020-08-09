import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes';

import configServer from './config/configServer';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(configServer.port);
