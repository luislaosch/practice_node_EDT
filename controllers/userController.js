const UserService = require ('../services/userService')

const userService = new UserService()

exports.getAllUsers = async (req,res)=>{
    const users = await userService.getAll()
    res.status(200).send(users)
}

exports.getUser = async (req,res)=>{
    const id = req.params.id
    const user = await userService.filterById(id)
    if (!user){
        return res.status(400).json({'message':"Usuario no encontrado"})
    }
    // res.status(200).send('Accediendo al usuario: '+ req.params.id)
    res.status(200).json(user)
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

exports.updateUser = async(req,res)=>{
    // console.log('Actualizar al usuario: '+ req.params.id)
    let data = req.body
    const id = req.params.id
    const user = await userService.filterById(id)
    if (!user){
        return res.status(400).json({'message':"Usuario no encontrado"})
    }
    
    await userService.update(id,data)

    // res.status(200).send('Accediendo al usuario: '+ req.params.id)
    res.status(200).json(user)

    // const {name, lastname, email, phone} = data
    // console.log(name, lastname, email, phone)
    // res.status(200).send("Usuario Actualizado")
}

exports.deleteUser = async (req,res)=>{
    const id = req.params.id
    const user = await userService.filterById(id)
    if (!user){
        return res.status(400).json({'message':"Usuario no encontrado"})
    }
    
    await userService.delete(id)


    // console.log('Eliminar al usuario: '+ req.params.id)
    res.status(200).send("usuario Eliminado")
}