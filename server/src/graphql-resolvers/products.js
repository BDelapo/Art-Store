const graphql = require('graphql');
const Product = require('../graphql-types/product')
const Database = require('../database/database')
const database = new Database
database.createProductTable()
const db = database.db





var getAllProducts = {
    type: graphql.GraphQLList(Product),
    resolve: function(root, context, info){
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM Products ;`, function(err, rows){
                if(err){
                     console.log('ERROR HAS OCCURED')
                     reject(err);
                     }
            console.log('SUCCESS!  ALL PRODUCTS FETCHED')
            resolve(rows);
            });
        }
        )
    }
}



var getProduct = {
    type: graphql.GraphQLList(Product),
    args: {
        name: { type: graphql.GraphQLString }
    },
    resolve: function(root, args, context, info){
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM Products WHERE name = "${args.name}";`, function(err, rows){
                if(err){
                     console.log('ERROR HAS OCCURED')
                     reject(err);
                }
            console.log('SUCCESS!  PRODUCT HAS BEEN FETCHED')
            resolve(rows);
            });
        }
        )
    }
}

var addProduct = {
    type: Product,
    args: {
        name : {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
        value: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)}
    },
    resolve: function(source, args){
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO Products(name, value) VALUES(?,?);`, [args.name, args.value], function(err, rows){
                if(err){
                    console.log('ERROR HAS OCCURED')
                    reject(err)
                }
                console.log('SUCCESS! PRODUCT ADDED TO TABLE')
                console.log(args.value)
                resolve(rows);
            })
        })
    }
}

module.exports = {getAllProducts, getProduct, addProduct}