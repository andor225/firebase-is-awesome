import * as admin from 'firebase-admin';
import { Router, Request, Response, NextFunction } from 'express'
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

const jsonParser = bodyParser.json();

export default class LoginComponent {
    public router: Router;
    constructor(){
        this.router = Router();

        this.routes();
    }
    private routes(){
        this.router.all('*', cors());
        this.router.get('/health', jsonParser, this.health);
    }

    private health = async (req: Request, res: Response, next: NextFunction) => {
        admin.database().ref('/messages/health').push({
            message: 'Health Check'
        }).then(_ => res.status(200).end());
    }
};