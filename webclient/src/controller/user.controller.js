const database = require("../model/db/user.db");
const userModel = require("../model/user.model");

const userController = {
    login: async function login(
        email,
        password
    ) {
        let answer = "failed";
        let db = await database.getDb();
        for (let index = 0; index < db.length; index++) {
            const element = db[index];
            
            if (element.email === email && element.password === password) {
                let user = await userModel.getUserModel(element);
                answer = user;
                return answer;
            } 
        }
        return answer;
    },
};

module.exports = userController;