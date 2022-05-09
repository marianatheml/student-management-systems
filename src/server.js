const express = require('express')
var cors = require('cors');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./api/schema')

const app = express()

app.use(cors());
app.use(express.json());
app.use('/api', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => console.log('Server is running!'))