const graphql = require('graphql')

const Product = new graphql.GraphQLObjectType({
    name: "Product",
    fields: {
        id: { type: graphql.GraphQLInt},
        name: { type: graphql.GraphQLString },
        value: { type: graphql.GraphQLString}
    }
})

module.exports = Product