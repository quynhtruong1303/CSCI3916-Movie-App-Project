# CSC3916 Movie App

A React single-page application for the CSC3916 Web API course. This app interacts with the Assignment 5 REST API to provide user authentication, movie browsing, movie reviews, and review submission functionality.

## Live Demo

[https://csci3916-movie-app-project.onrender.com](https://csci3916-movie-app-project.onrender.com)

## API

This app connects to the Assignment 5 API deployed at:
[https://csci3916-hw5-qrly.onrender.com](https://csci3916-hw5-qrly.onrender.com)

## Features

- User signup and signin with JWT authentication
- Browse top-rated movies sorted by average rating
- Movie detail view with poster image, actors, aggregated reviews, and average star rating
- Submit a review (rating + comment) directly from the movie detail page
- Search movies by partial title or actor name (extra credit)

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
REACT_APP_API_URL=https://csci3916-hw5-qrly.onrender.com
```

### Run Locally

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).
