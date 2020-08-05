const graphql = require('graphql');
const getAllProducts = require('./products')

var queries = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        getAllProducts
    }
})

module.exports = queries