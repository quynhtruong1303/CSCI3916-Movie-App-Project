# CSC3916 Movie App

A React single-page application for the CSC3916 Web API course. This app interacts with the Assignment 3 REST API to provide user authentication and movie browsing functionality.

## Live Demo

[https://csci3916-movie-app-project.onrender.com](https://csci3916-movie-app-project.onrender.com)

## API (Tentative)

This app currently connects to the Assignment 3 API deployed at:
[https://csci3916-hw3-jzho.onrender.com](https://csci3916-hw3-jzho.onrender.com)

## Features

- User signup and signin with JWT authentication
- Browse movies from a MongoDB-backed REST API
- Protected routes - movie content only accessible after signing in

## Progress

- [DONE] Deployed to Render
- [DONE] User signup (`/signup`)
- [DONE] User signin (`/signin`) with JWT token stored in localStorage
- [IN PROGRESS] Movie list view
- [IN PROGRESS] Movie detail view

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
REACT_APP_API_URL=https://csci3916-hw3-jzho.onrender.com
```

### Run Locally

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).
