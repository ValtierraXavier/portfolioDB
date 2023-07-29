import { Router } from "express";
import projectRoutes from './projectRoutes.js'
import commentRoutes from './commentRoutes.js'

const router = Router()
// response sent when root-path recieves GET request
router.get('/', (req, res) =>{
    res.send('API Root')
})
// Projects Route using the projectRoutes file to further specify path responses
router.use('/projects', projectRoutes)
// Comments Route using the commentsRoutes file to further specify path responses
router.use('/comments', commentRoutes)

export default router