# Mymoria-api-challenge

This is a Node.js, TypeScript, and Express project that exposes an HTTP API to fetch products by category. The project uses three JSON files, each containing data for one of the categories: coffin, urn, and flower.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v20 or higher)
- [npm](https://www.npmjs.com/)

## Getting Started

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

4. **Run the Application**

```bash
npm start

```

## API Endpoints

- Fetch Products by Category

```bash
GET /api/products/:category

```

- Parameters

`
:category - The product category (coffin, urn, or flower).
`

- Example 

```
GET http://localhost:3000/api/products/coffin

```

## Project Structure

your-project/
|-- src/
|   |-- controllers/
|   |   |-- productsController.ts
|   |-- routes/
|   |   |-- productsRoutes.ts
|   |-- index.ts
|-- tests/
|   |-- index.test.ts
|-- swagger.json
|-- .gitignore
|-- docker-compose.yml
|-- jest.config.js
|-- tsconfig.json
|-- package.json
|-- README.md

## Additional Information

- Swagger Documentation

`
Swagger documentation is available at ```http://localhost:3000/api-docs``` when the application is running.
`