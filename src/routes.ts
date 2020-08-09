import express from 'express';
import ClassesControler from './controllers/ClassesControler';
import ConnectionsController from './controllers/ConnectionsController';
import SubjectsController from './controllers/SubjectsController';

const routes = express.Router();
const classesControllers = new ClassesControler();
const connectionsControllers = new ConnectionsController();
const subjectsController = new SubjectsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);

routes.get('/subjects', subjectsController.index);

export default routes;
