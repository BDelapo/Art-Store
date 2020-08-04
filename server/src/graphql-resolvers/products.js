const graphql = require('graphql');
const Product = require('../graphql-types/product')
const Database = require('../database/database')
const db = new Database().db

var getAllProducts = {
    type: graphql.GraphQLList(Product),
    args: {
        name: { type: graphql.GraphQLString }
    },
    resolve: function(root, args, context, info){
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM product';`, function(err, rows){
                if(err){
                     console.log('ERROR HAS OCCURED')
                     reject(err);
                     }
            console.log('SUCCESS HAS OCCURED')
            resolve(rows);
            });
        }
        )
    }
}

module.exports = getAllProducts