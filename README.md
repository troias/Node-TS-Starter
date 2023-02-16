Node-TS-Starter is a basic starter template for building Node.js applications with TypeScript. The project is designed to help you kickstart your Node.js projects with a solid foundation, including linting, testing, and configuration.

Prerequisites
Node.js and npm should be installed on your machine.
TypeScript should be installed globally via npm install -g typescript
Getting Started
Clone the repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/troias/Node-TS-Starter.git
Install dependencies using npm install.

Start the development server by running npm run dev.

Open your browser and go to http://localhost:3000. You should see the message "Server is running" if everything is working correctly.

Start writing your code in the src directory. When you save changes, the server will automatically rebuild and restart.

Available Scripts
npm run build - Builds the application for production.
npm run dev - Starts the development server with automatic rebuilding and restarting.
npm run lint - Lints the codebase with ESLint.
npm test - Runs the test suite.
Project Structure
The project is structured as follows:

lua
Copy code
/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.ts
│   └── server.ts
├── test/
├── .env.example
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── jest.config.js
├── package.json
├── tsconfig.json
└── README.md
src/ - Contains the source code for the project.
src/controllers/ - Contains the controllers for the routes.
src/models/ - Contains the model definitions for the application.
src/routes/ - Contains the route definitions for the application.
src/utils/ - Contains utility functions used throughout the application.
src/app.ts - Initializes the application and middleware.
src/server.ts - Starts the server and listens for incoming requests.
test/ - Contains the test suite for the application.
.env.example - Contains example environment variables used by the application.
.eslintrc.json - Configures ESLint for the project.
.gitignore - Contains files and directories that should be ignored by git.
.prettierrc - Configures Prettier for the project.
jest.config.js - Configures Jest for the project.
package.json - Contains project metadata and dependencies.
tsconfig.json - Configures TypeScript for the project.
Contributing
If you would like to contribute to the project, please open an issue or a pull request. All contributions are welcome!
