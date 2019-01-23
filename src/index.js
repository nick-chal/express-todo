import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes';
import * as errorHandler from './middlewares/errorHandler';

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use('/', routes);

app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.notFoundError);

app.listen(PORT, err => {
  if (err) {
    console.log('error!!', err);
    return;
  }
  console.log(`Listening on the port ${PORT}`);
});
