var User = require('../models/user')

class Users{
    constructor() {
        this.name = 'fufeng'
    }

    reginer(req, res, next) {
        return function() {
            console.log('aa');
        }
    }
}

exports.isUser = new Users