const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000
const {MONGOURI} = require('./keys') 
//const multer = require('multer');


const  UtilisateurRoute = require('./routes/utilisateurCrud')
//const  AuthentificationRoute=require('./routes/auth')
const babyroute = require('./routes/baby')
const poidsRoute = require('./routes/poids')
const tailleRoute = require('./routes/taille')
const temperatureRoute = require('./routes/temperature')
const teteRoute = require('./routes/tete')
const solideRoute = require('./routes/solide')
const reveilRoute = require('./routes/reveil')  
const bibronRoute = require('./routes/bibron')
const endormissementRoute = require('./routes/endormissement')
const vaccinRoute = require('./routes/vaccin')
const medicamentRoute = require ('./routes/medicament')

mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})
mongoose.connection.on('errr',(err)=>{
    console.log("err connecting",err) 
})

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})

/*
// storage engine 
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000
    }
})

app.post("/upload", upload.single('profile'), (req, res) => {
    res.json({
        success: 1,
       // profile_url: `http://localhost:5000/profile/${req.file.filename}`
        profile_url: `http://localhost:27017/MagicMaman`
    })
})



function errHandler(err, req, res, next) {
    if (err instanceof multer.MulterError) {
        res.json({
            success: 0,
            message: err.message
        })
    }
}*/


require('./models/user')
app.use(express.json())
app.use(require('./routes/auth'))
app.use('/api/utilisateur',UtilisateurRoute)
app.use('/baby',babyroute)
app.use('/poids',poidsRoute)
app.use('/taille',tailleRoute)
app.use('/temperature',temperatureRoute)
app.use('/tete',teteRoute)
app.use('/solide',solideRoute) 
app.use('/reveil',reveilRoute)
app.use('/bibron',bibronRoute)
app.use('/endormissement',endormissementRoute)
app.use('/vaccin', vaccinRoute)
app.use('/medicament', medicamentRoute) 
//app.use('/uploads',express.static('uploads'))
