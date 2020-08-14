const sqlite3 = require('sqlite3').verbose();



//Tentaive Database instantiating class
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


//Creates the Product table
const createProductTable = () => {
  const database = new Database()
  const query = `
      CREATE TABLE IF NOT EXISTS Products (
      id integer PRIMARY KEY,
      name text)`;
  return database.db.run(query);
}



//To insert row in Product table for testing purposes
const insertName = () => {
  const database = new Database()
  const query = `
      INSERT INTO Products VALUES(1,"Tyler")`;
  database.db.run(query)
}

module.exports = Database
