const express = require('express')
const router = express.Router()
const User = require('../models/user')


router.get('/getusers', async(req,res) => {
    try{
           const users = await User.find()
           res.json(users)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/getusers/:mobile', async(req,res) => {
    try{
           const users = await User.find({mobile: req.params.mobile})
           res.json(users)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/saveuser', async(req,res) => {
    const user = new User({
        name: req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        city: req.body.city
    })

    try{
        const a1 =  await user.save() 
        res.send("USER SAVED")
    }catch(err){
        res.send('Error'+err)
    }
})

router.delete('/deleteuser/:mobile',async(req,res)=> {
    try{
        const a1= await User.deleteOne({
            mobile: req.params.mobile
        })   
        res.json(a1)
    }catch(err){
        res.send('Error'+err)
    }

})

router.put('/updateuser',async(req,res)=> {
    try{
        const a1= await User.findOneAndUpdate(
            {mobile: req.body.mobile},
            {
            $set: {
                name: req.body.name,
                email: req.body.email,
                username: req.body.username,
                password: req.body.password,
                city: req.body.city
              }
            },
            {
              upsert: true
            }
        )   
        res.send("UPDATE OK")
    }catch(err){
        res.send('Error'+err)
    }

})



module.exports = router