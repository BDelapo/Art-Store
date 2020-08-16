const graphql = require('graphql');
const {addProduct} = require('./products')

var mutations = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields : {
        addProduct
    }
})

module.exports = mutations