const express = require ("express")
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
//pour cacher le mot de passe de bd!!!
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const{JWT_SECRET} = require('../keys')
const requireLogin = require('../middelware/requireLogin')



router.get('/protected',requireLogin,(req,res)=>{
    res.send("Hello user!")
})

router.post('/signup',(req,res)=>{
    console.log(req.body.name)
    const{name,email,password
    }=req.body
    if(!email || !password || !name){
      return res.status(422).json({Error:"fields should not be empty!"}) 
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if (savedUser){
            return res.status(422).json({Error:"email already used!"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
                const user = new User({
                    name ,
                    email,
                    password:hashedpassword
                })
                user.save()
                .then(response=>{
                    res.json({message:"succeful Saved data!", response})
                })
                .catch(err=>{
                    console.log(err)
                })
   
        })
        
    })  
    .catch(err=>{
        console.log(err)
    })
})

router.post('/signin',(req,res)=>{
    const{email,password}= req.body
    if(!email || !password){
        res.status(422).json({error:"Must add email or password!"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
        res.status(422).json({error:"invalid email or password!"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                //res.json({message:"successfuly Signed in"})
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET) 
                res.json({token})
            }
            else{res.status(422).json({error:"invalid email or password!"})
            }
        })
        .catch(err=>{
            console.log(err)
        })

    })
})

module.exports = router