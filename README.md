# React Movie App

This is a React-based front-end application built with **Vite** as the build tool. The app fetches movie data using the public API from [moviedb.org](https://www.themoviedb.org/documentation/api).

## Features

- Built using React functional components and hooks
- Utilizes Vite for fast build and development experience
- Fetches movie data dynamically from the MovieDB API
- Responsive and clean UI design

## Tech Stack

- React (with hooks)
- Vite (for bundling and development server)
- MovieDB public API for backend data

## Environment Variables

Make sure to create a .env file with your MovieDB API key like this:
```bash
VITE_API_KEY=your_api_key_here
```

Access it in your code with:
```bash
const API_KEY = import.meta.env.VITE_API_KEY;
```

## Usage

- The app calls the MovieDB API to display movies.
- You can explore movies and see details dynamically.
  
---

## Installation

1. Clone this repo:

```bash
git clone git@github.com:USER1043/MovieViewer.git
```
2. Install dependencies:

```bash
npm install
```
3. Run the app:

```bash
npm start
```
The app will open in your browser at http://localhost:3000.

---

## Learnings

- React components & hooks (useState, useEffect)
- Fetching data from external APIs
- Basic state management in React
- Handling async operations in React

## Notes

- This app uses the public MovieDB API, no authentication required.
- API calls are made from the front-end.

Feel free to contribute or ask questions!

Author: Prajan Karthik  
Date: 2025-05-27
