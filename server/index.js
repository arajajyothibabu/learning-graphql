const express = require('express');
const graphQLHTTP = require('express-graphql');

const schema = require('./schema');

const app = express();

app.use('/graphql', graphQLHTTP({
    schema: schema
}));

app.listen(4000, () => {
    console.log("Server listening on 4000");
});