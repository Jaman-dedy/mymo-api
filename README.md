# Mymoria-api-challenge

## Overview

The MyMeoria API is a RESTful API that provides endpoints to manage funeral-related products, wishlists, and more.


## Table of Contents

- [Features](#features)
- [Project structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Server](#running-the-server)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Built With](#built-with)

## Features

- Fetch products by category (coffin, urn, flower)
- Add and view products in a wishlist
- Remove items from the wishlist
- Basic authentication for API access
- Swagger documentation for API reference
- Unit & integration tests

## Getting Started

### Project structure

- **src/:** Contains the source code of the application.
  - **controllers/:** Handles route logic and interaction with models.
  - **middleware/:** Includes middleware functions for request processing.
  - **routes/:** Defines API routes.
  - **types/:** Holds TypeScript type definitions.
  - **index.ts:** Initializes and starts the server.

- **test/:** Includes test files for unit testing.
  - **controllers/:** Test suites for controller functions.
  - **middleware/:** Test suites for middleware functions.
functionality.
  - **index.spec.ts:** Test suite for the main server file.

- **.nyc_output/:** Output folder for code coverage.

- **.gitignore:** Configuration file to specify files and directories ignored by Git.

- **node_modules/:** Node.js modules installed by npm.

- **package.json:** Manifest file containing metadata and dependencies.

- **README.md:** Project documentation file.

- **swagger.json:** Swagger API documentation configuration.

- **tsconfig.json:** TypeScript compiler configuration.

- **tslint.json:** TSLint configuration for code linting.


### Prerequisites

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm

### Installation

1. **Clone the Repository:**

   ```bash
   git clone git@github.com:Jaman-dedy/mymo-api.git


2. **Navigate to the Project Directory:**

```bash
cd your-project

```

3. **Install Dependencies**

```bash
npm install

```

## Running the Server

1. **Locally**

```bash
npm run start:dev

```

2. **With docker**

```bash
- docker-compose up

or in background 

- docker-compose up -d

stop the container with 

- docker-compose down
```

## API Documentation

## Testing Credentials

To test the application, use the following credentials:

- **Username:** admin
- **Password:** password123

- [apiDoc](http://localhost:3000/api-docs)

## Testing

![image](https://github.com/Jaman-dedy/mymo-api/assets/46047244/83b05927-9f12-498e-be2d-25b491acc719)

- npm run test
- npm run test:coverage


## Built with

- [Express](https://expressjs.com/)
- [Swagger](https://swagger.io/)
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)
