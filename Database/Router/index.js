import { Router } from "express";
import projectRoutes from './projectRoutes.js'
import commentRoutes from './commentRoutes.js'

const router = Router()
// response sent when root-path recieves GET request
router.get('/', (req, res) =>{
    res.send('API Root');
    res.header('Access-Control-Allow-Origin', ['https://betterportfolio-production.up.railway.app']);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
})

// Projects Route using the projectRoutes file to further specify path responses
router.use('/projects', projectRoutes)
// Comments Route using the commentsRoutes file to further specify path responses
router.use('/comments', commentRoutes)

export default router