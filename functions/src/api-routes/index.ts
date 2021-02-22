import * as express from 'express';
import * as cors from 'cors';
import * as functions from 'firebase-functions';

import requestRoutes from './requests-routes';

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.use(requestRoutes);

// Health Check Route
app.get('/', (req, res) => {
    res.send('Ok')
});


export default functions.https.onRequest(app);
