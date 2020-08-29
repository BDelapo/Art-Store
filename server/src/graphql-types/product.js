const graphql = require('graphql')

const Product = new graphql.GraphQLObjectType({
    name: "Product",
    fields: {
        id: {type: graphql.GraphQLID},
        productName: { type: graphql.GraphQLString},
        price: { type: graphql.GraphQLInt},
        description: { type: graphql.GraphQLString},
        image: { type: graphql.GraphQLString}
    }
})

module.exports = Product