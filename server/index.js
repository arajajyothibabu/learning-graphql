const express = require('express');
const graphQLHTTP = require('express-graphql');
const mongoose = require('mongoose');

const schema = require('./schema');

const app = express();

mongoose.connect("mongodb://localhost:27017/graphql");
mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB");

});

app.use('/graphql', graphQLHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("Server listening on 4000");
});