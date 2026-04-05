# CSC3916 Movie App

A React single-page application for the CSC3916 Web API course. This app interacts with the Assignment 4 REST API to provide user authentication, movie browsing, and movie reviews functionality.

## Live Demo

[https://csci3916-movie-app-project.onrender.com](https://csci3916-movie-app-project.onrender.com)

## API

This app connects to the Assignment 4 API deployed at:
[https://csci3916-hw4-g2px.onrender.com](https://csci3916-hw4-g2px.onrender.com)

## Features

- User signup and signin with JWT authentication
- Browse movies from a MongoDB-backed REST API
- Movie detail view with aggregated reviews and average star rating
- Protected routes - movie content only accessible after signing in

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.development` file in the project root:

```
REACT_APP_API_URL=https://csci3916-hw4-g2px.onrender.com
```

### Run Locally

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).
