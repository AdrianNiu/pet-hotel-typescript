Group project for pet hotel

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Minneapolis Pet Hotel
This is a pet management tool to help track pet's owner, check-in and check-out status.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:


## Installation

1. Create a new database called `pet_hotel`
    * The `database.sql` file contains the queries you will need to be able to set up the required tables for this application
2. Run `npm install`
3. Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    * While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
4. If Postgres is not already running, start it by entering `brew services start postgresql` into the terminal
5. Run `npm run server`
6. Run `npm run client`
7. Running the two previous commands will open a web browser with the application


## Built With

* React
* React Sagas
* Redux
* JavaScript
* TypeScript
* React Bootstrap
* Sweet Alerts
* Node.js
* Express
* PostgreSQL
* Passport

## Acknowledgement
Thanks to [Prime Digital Academy](https://www.primeacademy.io) for providing the knowledge to create this application


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

