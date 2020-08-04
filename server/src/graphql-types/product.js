const graphql = require('graphql')

const Product = new graphql.GraphQLObjectType({
    name: "Product",
    fields: {
        name: { type: graphql.GraphQLString }
    }
})

module.exports = Product