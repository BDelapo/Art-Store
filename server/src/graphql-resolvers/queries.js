const graphql = require('graphql');
const {getAllProducts, getProduct} = require('./products')

var queries = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        getAllProducts,
        getProduct
    }
})

module.exports = queries