# Global Search by OneShot

#### Requirements of this project

1. Node.js
2. MongoDB (local or atlas)

### Procedure to run it locally

1. Clone this repository
2. run command npm install (npm i) in the main directory where package.json exists
3. Create a environment file (.env) and add the following details
   PORT=4000
   LOCAL_DB=<connection URL for local mongoDB> ex: mongodb://localhost/globalSearch
   MONGODB_URI=<Connection URI for mongoDB Atlas> ex: mongodb+srv://<adminName>:<password>@cluster0.xxxx.mongodb.net/globalSearch?retryWrites=true&w=majority
4. Change the variable URI in server.js file according to database type you want to use
5. start server by running command - node server.js / nodemon server.js
