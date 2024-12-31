const User = require ('../models/userModels')

class UserService{

    constructor(){}

    async create(data){
        const user = new User(data)
        return await user.save()
    }
}

module.exports = UserService