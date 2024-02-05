//router of server side
import {IRouter , Router} from 'express';
const Main_router : IRouter = Router();
import { create , get} from '../Controller/main.controller'

Main_router.get("/", get)
Main_router.post('/example',create)

export default Main_router ;