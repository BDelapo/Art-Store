const graphql = require('graphql');
const Product = require('../graphql-types/product')
const Database = require('../database/database')
const database = new Database
database.createProductTable()
const db = database.db





var getAllProducts = {
    type: graphql.GraphQLList(Product),
    resolve: function(){
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
        name: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
    },
    resolve: function(args){
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM Products WHERE name = "${args.productName}";`, function(err, rows){
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
        productName : {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
        price : {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
        description : {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
        image: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)}
    },
    resolve: function(source,args){
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO Products(product_name, price, description, image) VALUES(?,?,?,?);`, [args.productName, args.price, args.description, args.image], function(err, rows){
                if(err){
                    console.log('ERROR HAS OCCURED')
                    reject(err)
                }
                console.log('SUCCESS! PRODUCT ADDED TO TABLE')
                resolve(rows);
            })
        })
    }
}

module.exports = {getAllProducts, getProduct, addProduct}