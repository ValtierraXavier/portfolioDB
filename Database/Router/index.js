import { Router } from "express";
import projectRoutes from './projectRoutes.js'
import commentRoutes from './commentRoutes.js'

const router = Router()

router.get('/', (req, res) =>{
    res.send('API Root')
    res.header('Access-Control-Allow-Origin', ['https://betterportfolio-production.up.railway.app']);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
})

router.use('/projects', projectRoutes)
router.use('/comments', commentRoutes)

export default router