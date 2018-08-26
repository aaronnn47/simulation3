module.exports={

    register: (req,res)=>{
        let db = req.app.get('db')
        let {username, password} = req.body


        db.create_user([username,password])
        .then(users=>{
            res.status(200).send(users)
        })
    }, 
    
    post: (req, res)=>{
        let db = req.app.get('db')
        let {content, image_url, title} = req.body

        console.log(content, image_url, title)
    }



}