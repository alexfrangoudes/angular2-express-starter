import {Router, Request, Response, NextFunction} from 'express';


let apiRouter: Router = Router();


apiRouter.get('/hello', (req: Request, res: Response, next: NextFunction) => {
    res.json({message: 'Angular app works'});
});


export {apiRouter}