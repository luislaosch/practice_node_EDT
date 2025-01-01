const User = require ('../models/userModels')

class UserService{

    constructor(){}
    async getAll(){
       const users = await User.find({})
       return users
    }

    async filterById(id){
        const user = await User.findOne({_id: id})
        return user
     }

    async create(data){
        const user = new User(data)
        return await user.save()
    }

    async update(id, data){
        return await User.findByIdAndUpdate({_id:id},data)
    }

    async delete (id){
        return await User.findByIdAndDelete({_id:id})
    }
}

module.exports = UserService