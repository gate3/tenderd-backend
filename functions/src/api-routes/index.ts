import * as express from 'express';
import * as cors from 'cors';
import * as functions from 'firebase-functions';

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Health Check Route
app.get('/', (req, res) => {
    res.send('Ok')
});


export default functions.https.onRequest(app);
