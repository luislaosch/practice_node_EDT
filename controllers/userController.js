const UserService = require ('../services/userService')

const userService = new UserService()

exports.getAllUsers = (req,res)=>{
    res.status(200).send('Accediendo a todos los usuarios')
}

exports.getUser = (req,res)=>{
    res.status(200).send('Accediendo al usuario: '+ req.params.id)
}

exports.createUser = async (req,res)=>{
    try {
    let data = req.body
    await userService.create(data)

    res.status(201).send("Usuario registrado")
        
    } catch (error) {
        // res.status(500).send(error.message)
        res.status(500).json({"error":error.message})
    }
    
}

exports.updateUser = (req,res)=>{
    console.log('Actualizar al usuario: '+ req.params.id)
    let data = req.body
    const {name, lastname, email, phone} = data
    console.log(name, lastname, email, phone)
    res.status(200).send("Usuario Actualizado")
}

exports.deleteUser = (req,res)=>{
    console.log('Eliminar al usuario: '+ req.params.id)
    res.status(200).send("usuario Eliminado")
}