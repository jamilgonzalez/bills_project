require("dotenv").config();
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const mongoose = require("mongoose");

const app = require("./app");
const schema = require("./graphql/schema");
const { ApolloLandingPage } = require("./util");

const { PORT = 4000, MONGO_URL } = process.env;

async function connectToMongodb() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("🚀 Connected to mongodb");
  } catch (err) {
    console.error(`Error connecting to mongodb - ${err}`);
    throw Error("Error connecting to db");
  }
}

const server = new ApolloServer({ schema, plugins: [ApolloLandingPage] });

async function startApolloServer() {
  await connectToMongodb();

  // GRAPHQL
  await server.start();
  app.use(
    expressMiddleware(server, {
      context: ({ req }) => ({
        user: req?.user,
        isAuthenticated: req.isAuthenticated(),
      }),
    })
  );

  app.listen(PORT, () => {
    console.log(`🚀 App listening on port ${PORT}...`);
  });
}

startApolloServer();
