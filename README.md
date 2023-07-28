# Teebay-BE

## Prequisite
Before running the GraphQL backend server, make sure you have the following installed:
1. Node.js (version 14 or later)
2. NPM (Node Package Manager)
3. Docker container
4. Prisma CLI (to set up the database schema and generate the Prisma client)

## Installation
Create a .env file in the project root directory and define environment variables required for the server configuration, including the database connection string and other sensitive information.
Navigate to the project directory and install the dependencies by running the following command:
- yarn install

To initiate database from docker run the following command:

- docker compose up

Once database is started and running, run the following to migrate:

- npx prisma migrate dev --name init
- npx prisma generate

To start the GraphQL backend server, run the following command:

- yarn run dev

The server will be running on the specified port (default is 5000). You can access the GraphQL playground at http://localhost:5000/graphql. The playground provides a graphical interface to interact with the GraphQL API and test queries and mutations.
