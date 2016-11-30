import * as express from 'express';
import * as path from 'path';
import * as compression from 'compression';
import {json, urlencoded} from 'body-parser';
import {apiRouter} from './controllers/api';


const app: express.Application = express();
app.disable('x-powered-by');

app.use(json());
app.use(compression());
app.use(urlencoded({extended: true}));

// controllers
app.use('/api', apiRouter);

if (process.env.NODE_ENV === 'production') {
    // in production mode run application from dist folder
    app.use(express.static(path.join(__dirname, '../client')));
}

// catch 404 and forward to error handler
app.use(function (req: express.Request, res: express.Response, next) {
    let err = new Error('Not Found');
    next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function (err: any, req: express.Request, res: express.Response) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});


export {app}