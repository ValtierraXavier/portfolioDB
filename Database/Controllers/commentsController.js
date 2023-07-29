import Comment from '../Models/CommentModels.js'

// (GET) Query the comments Collection for every Document it contains. (unrestricted)
export const getComments = async (req,res) =>{
    try { 
            const comments = await Comment.find({})   
            await res.json(comments)
        } catch (error) {
        console.log('error: ', error)
    }
}
// (GET) Query the comments Collection for a single Document using the objectId
export const getComment = async (req,res) =>{
    try {
        const singleComment = await Comment.findById(id)
        if(singleComment){
            await res.json(singleComment)
        }else{
            res.send('record does not exist')
        }
    } catch (error) {
        console.log('error: ', error)
    }
}

// (POST) Query the comments Collection to create a new document using the data in req.body
export const addComment = async (req,res) => {
    try {
        const newComment = new Comment(req.body)
        await newComment.save()
        await res.send(`${newComment}\n\bwas entered into the DB\b`)
    } catch (error) {
        console.log('error: ', error)
    }
}

// (POST) Query the comments Collection to update an existing document using the ObjectId to find the document and req.body for update data
export const updateComment = async(req,res) => {
    try {       
        const {id} = req.params
        const oldOne = await Comment.findById(id)
        const edits = await Comment.findByIdAndUpdate(id, req.body)
        await edits.save()
        const newOne = await Comment.findById(id)
        await res.send(`${oldOne} \nwas changed to\n ${newOne}`)
    } catch (error) {
        console.log('error: ', error)
    }
}

// (DELETE)Sends a delete request to the comments Collection to delete a specific document using the objectId
export const deleteComment = async (req,res) =>{
    try{
        const {id} =req.params
        const deleted = await Comment.findById(id)
        await Comment.findByIdAndDelete(id)
        await res.send(`Deleted:\n ${deleted}`)
    }catch (error) {
        console.log('error: ', error)
    }
}

