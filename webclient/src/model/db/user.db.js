const userDB = {
    georges: {
        "name": "Georges",
        "email": "kayss.g@gmail.com",
        "password": "12345678",
        "phone": "0729350501"
    },
    getDb: async function getDb() {
        let users = [];
        users.push(this.georges);
        return users;
    },
    saveToDb: function saveToDb(data) {
        const fs = require('fs')
        //check if file exist
        if (!fs.existsSync('db.json')) {
            //create new file if not exist
            fs.closeSync(fs.openSync('db.json', 'w'));
        }

        // read file
        const file = fs.readFileSync('db.json')
        const data = {
            studentName: 'Joe',
            address: 'abc'
        }

        //check if file is empty
        if (file.length == 0) {
            //add data to json file
            fs.writeFileSync("db.json", JSON.stringify([data]))
        } else {
            //append data to jso file
            const json = JSON.parse(file.toString())
            //add json element to json object
            json.push(data);
            fs.writeFileSync("db.json", JSON.stringify(data))
        }
    }
};

module.exports = userDB;