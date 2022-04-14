// Look at three layers of callback in this code!
app.get('/',function(req, res) {
    Users.findOne({ _id:req.body.id },function(err,user) {
        if(user) {user.update({/* params to update */},function(err, document) {
            res.json({user: document
            })
        })
    }
    else{user.create(req.body,function(err, document){
        res.json({user: document
        })
    })
}
})
})