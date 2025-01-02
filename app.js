const express = require ('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const userLoggerd = require('./middlewares/userLogged')
const userRouter = require('./routers/userRouter')
const authRouter = require('./routers/authRouter')
const connection = require('./database/connection')

app.get('/', (req, res)=>{
    // console.log("servidor express")
    const data = {
        "title":"título de mi pagina",
        "message": "bienvenido a mi sitio web",
        "showMessage": false,
        "items": [1,2,3,4,5,6]
    }
    res.render('index',data)
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')
app.use(express.json())
app.use(morgan('dev'))

//usando el middleware cre
// app.use(userLoggerd)
app.use('/users',userRouter)
app.use('/auth',authRouter)
app.listen(3000,()=>{
    console.log("puerto 3000")
})

