const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { users, thoughts } = require("./data");

connection.on("error", (err) => {
  console.error(err);
  process.exit(1);
});

connection.once("open", async () => {
  try {
    console.log("connected");

    await User.deleteMany({});

    await Thought.deleteMany({});

    await User.insertMany(users);

    await Thought.insertMany(thoughts);

    console.info("Seeding complete.");
  } catch (error) {
    console.error("Error during seeding: ", error);
  } finally {
    connection.close();
    process.exit(0);
  }
});
