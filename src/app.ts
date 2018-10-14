import * as express from 'express';
import allowAllCors from './middlewares/allow-all-cors';
import errorHandler from './middlewares/error-handler';
import controllers from './controllers';

const app = express();
app.use(allowAllCors);
app.use('/', controllers);
app.use(errorHandler);

app.listen(8000);

export default app;
