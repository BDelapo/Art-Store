const graphql = require('graphql');
const {addProduct, removeProduct} = require('./products')

var mutations = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields : {
        addProduct,
        removeProduct
    }
})

module.exports = mutations