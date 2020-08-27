const graphql = require('graphql');
const {getAllProducts, getProduct} = require('./products')

var queries = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        getProduct,
        getAllProducts
    }
})

module.exports = queries