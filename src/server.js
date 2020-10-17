import 'dotenv/config';
import express from 'express';

import UserController from './app/controllers/UserController';

import BullBoard from 'bull-board';
import Queue from './app/lib/Queue';

const app = express();

//BullBoard Init
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());

//BullBoard Route
app.use('/admin/queues', BullBoard.UI);

app.post('/users', UserController.store);
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
});

app.listen(3333, () => {
    console.log('Server running in localhost:3333');
});