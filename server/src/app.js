// Import npm packages
const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
// Import local files
const schema = require("./schema/schema");
// Create express app
const app = express();
// Connect to database
mongoose.connect(
  "mongodb://test123:test123@ds024548.mlab.com:24548/graphql-express-react",
  { useNewUrlParser: true, useCreateIndex: true }
);
mongoose.connection.once("open", () => {
  console.log("Connected to database.");
});
// Make graphql api route
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));
// Start the server
app.listen(8000, () => {
  console.log("Server is running on port 8000.");
});
