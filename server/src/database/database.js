const sqlite3 = require('sqlite3').verbose();



class Database{
    constructor(){
         this.db = new sqlite3.Database('../db.sqlite', (err) => {
            if (err) {
                console.error(err.message);
              }
            else{
                console.log('DB CONNECTED')
            }
         });
        }
}

module.exports = Database