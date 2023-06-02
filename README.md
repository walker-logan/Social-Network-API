Social Network API
Description
This project is a backend application for a social network platform. The API supports user and friend management, as well as the ability to post, update, and delete thoughts and reactions.

Installation
To install necessary dependencies, run the following command:

Copy code
npm install
Technologies Used
MongoDB
Express.js
Node.js
Mongoose
Usage
Start the server using the command: npm start or node index.js.
Use a tool such as Postman or Insomnia to make requests to the API endpoints.
API Routes
User Routes:

GET all users: /api/users
GET a single user by ID: /api/users/:id
POST a new user: /api/users
PUT update a user by ID: /api/users/:id
DELETE a user by ID: /api/users/:id
POST add a friend: /api/users/:userId/friends/:friendId
DELETE a friend: /api/users/:userId/friends/:friendId
Thought Routes:

GET all thoughts: /api/thoughts
GET a single thought by ID: /api/thoughts/:id
POST a new thought: /api/thoughts
PUT update a thought by ID: /api/thoughts/:id
DELETE a thought by ID: /api/thoughts/:id
POST add a reaction to a thought: /api/thoughts/:thoughtId/reactions
DELETE a reaction: /api/thoughts/:thoughtId/reactions/:reactionId
Contribution
Made by [Your Name]

Questions
If you have any questions about the repo, please open an issue or contact me directly at [your email]. You can find more of my work at your GitHub username.
