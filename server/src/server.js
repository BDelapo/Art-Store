const express = require('express')
const cors = require('cors')
const graphql = require('graphql')
const { graphqlHTTP } = require('express-graphql')
const queries = require('./graphql-resolvers/queries')
const mutations = require('./graphql-resolvers/mutations')

const app = express()
app.use(cors())

const port = 5000

const schema = new graphql.GraphQLSchema({
    query: queries,
    mutation : mutations

});



app.use('/graphql', (req, res) => {
    return graphqlHTTP({
        schema: schema,
        graphiql: true,
    })(req, res);
})

app.get('/', (req, res) =>{

    return res.send("This is a test")
})

app.listen(port, ()=>{
    console.log('Server is up and listening on port '+ port)
})