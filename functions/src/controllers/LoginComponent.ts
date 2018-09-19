import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
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
        const message = "Hi " + functions.config().boss.name;
        admin.database().ref('/messages/health').push({message})
            .then(_ => res.status(200).end());
    }
};