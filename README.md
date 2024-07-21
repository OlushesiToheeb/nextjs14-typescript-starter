# Next.js 14 TypeScript Starter

Welcome to the Next.js 14 TypeScript Starter project! This repository is a boilerplate for Next.js 14 applications using TypeScript, integrating several advanced features and tools to kickstart your development.

## Features

This starter kit includes the following technologies:

- **Next.js 14** with the App Router
- **TypeScript**: Static type checking
- **Redux & Redux-Persist**: State management and persistence
- **Tailwind CSS**: Utility-first CSS framework
- **Sass**: CSS pre-processing
- **Docker**: Application containerization
- **Jest**: Unit testing
- **Playwright**: End-to-end testing
- **React Hook Form**: Efficient form management
- **ESLint & Prettier**: Code linting and formatting
- **Yup**: Schema validation for forms
- **lint-staged**: Running linters on git staged files

## Getting Started

### Prerequisites

Ensure you have Node.js version 14.x or higher installed. Docker is optional but recommended for containerization.

### Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/OlushesiToheeb/nextjs14-typescript-starter.git
    cd nextjs14-typescript-starter
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

### Running the App

To run the application in development or production environments, use the following commands:

1. **Development mode:**

    ```bash
    npm run dev
    ```

2. **Production mode:**

    Build and start the application:

    ```bash
    npm run build
    npm start
    ```

### Docker Usage

To build and run the application using Docker, execute:

```bash
docker build -t nextjs14-typescript-starter .
docker run -p 3000:3000 nextjs14-typescript-starter
```

### Testing

Run unit and end-to-end tests using:

1. **Unit tests with Jest:**

    ```bash
    npm run test
    ```

2. **End-to-end tests with Playwright:**

    ```bash
    npm run test:e2e
    ```

### Linting and Formatting

Ensure your code meets the coding standards with:

1. **Linting:**

    ```bash
    npm run lint
    ```

2. **Formatting:**

    ```bash
    npm run format
    ```

### Husky and lint-staged

Husky and lint-staged are configured to run linters on git staged files to ensure code quality before commits.

## Contributing

Contributions to improve the starter kit are highly welcomed. Please feel free to fork the repository, make your changes, and submit a pull request.
