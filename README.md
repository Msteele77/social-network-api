# social-network-api

This project is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.


## Getting Started

- Navigate to https://github.com/Msteele77/social-network-api and clone the repository via command line to your local machine. 

- Install the dependencies in the project's directory (npm i express mongoose).

- Use Insomnia Core to try out the routes. 

## Route Examples

### User Routes (/api/users):

- POST a new user
- GET all users
- GET user by id
- PUT update user by id
- DEL user by id

([View User Routes Example](https://drive.google.com/file/d/13wz5xk2JnzF_pFFZ3IhJQrPdRecAWzGt/preview))


### Thought Routes (/api/thoughts):

- POST new thought
- GET all thoughts
- GET thought by id
- PUT update thought by id
- DEL thought by id

([View Thought Routes Example](https://drive.google.com/file/d/1Jo26mhEu8yZjSupkt4hXn97leggr8K--/view))


### Reaction Routes (/api/thoughts/:thoughtId/reactions):

- POST new reaction
- DEL reaction by id

([View Reaction Routes Example](https://drive.google.com/file/d/1CtrsRZsyP6Lt4HjR94oNTjtGiBNLucvm/preview))


### Friend Routes (/api/users/:userId/friends/:friendId):

- POST a new friend
- DEL friend by id

([View Friend Routes Example](https://drive.google.com/file/d/1Jo26mhEu8yZjSupkt4hXn97leggr8K--/view))


## Technologies Used:

- Express.js for routing
- MongoDB database
- Mongoose ODM
- Insomnia for testing
- Javascript
