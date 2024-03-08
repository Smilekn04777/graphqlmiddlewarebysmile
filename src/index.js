// File: graphql-middleware.js

const express = require('express');
const { graphqlHTTP } = require('express-graphql'); // Make sure to install express-graphql

class GraphQLMiddleware {
  constructor(schema) {
    this.schema = schema;
    this.setupMiddleware();
  }

  setupMiddleware() {
    const app = express();

    app.use(
      '/graphql',
      graphqlHTTP({
        schema: this.schema,
        graphiql: true, // Enable GraphiQL for easy testing
      })
    );

    this.app = app;
  }

  applyMiddleware(req, res, next) {
    this.app(req, res, next);
  }
}

module.exports = GraphQLMiddleware;
