const graphql = require('graphql')

const Product = new graphql.GraphQLObjectType({
    name: "Product",
    fields: {
        productName: { type: graphql.GraphQLString},
        price: { type: graphql.GraphQLString},
        Description: { type: graphql.GraphQLString},
        image: { type: graphql.GraphQLString}
    }
})

module.exports = Product