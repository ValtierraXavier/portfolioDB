import mongoose, { Schema } from 'mongoose'

export let projectSchema = new mongoose.Schema({
        projectName: String,
        url: String,
        gitUrl: String,
        imgUrl: String,
        point1: String,
        point2: String,
        point3: String,
        })
        
let Project = mongoose.model('Project', projectSchema)

export default Project
