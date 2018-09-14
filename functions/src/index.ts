import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as moment from 'moment';

admin.initializeApp();

const app = express();

import LoginComponent from './controllers/LoginComponent';
app.use('/', new LoginComponent().router);

exports.api = functions.https.onRequest(app);

exports.makeUppercase = functions.database.ref('/messages/{uid}/{pushId}')
    .onCreate((snap, context) => {
        const original = snap.val();
        console.log('Uppercasing', context.params.pushId, original);
        const uppercase = original.message.toUpperCase();

        return snap.ref.child('uppercase').set(uppercase);
    });

exports.minutesTick = functions.pubsub.topic('tick')
    .onPublish((event) => {
       const time = moment();
       console.log(time.format());
    });