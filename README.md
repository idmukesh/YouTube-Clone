# YouTube Clone - MERN Stack

## Overview

Welcome to the **YouTube Clone** project built using the **MERN stack** (MongoDB, Express.js, React, Node.js). This project contains core features of YouTube, including user authentication, video player, viewing, commenting, and channel management.

### Features

- **Home Page**: Displays a YouTube-like header, a static sidebar (toggle-able with a hamburger menu), filter buttons, and a grid of video thumbnails. Each video card shows:
  - Title
  - Thumbnail
  - Channel Name
  - Views

- **User Authentication**: Users can sign up and log in using their username, email, and password. The app uses **JWT** (JSON Web Tokens) for authentication. After login, the user's name is displayed at the top of the home page.

- **Search and Filter**: A search bar to filter videos by title. Filter buttons allow users to filter videos by category.

- **Video Player**: Displays the selected video with the player, title, description, like/share buttons, and a comment section. Users can see static comments.

- **Channel Page**: Users can create a channel once signed in, view a list of videos belonging to that channel, and edit or delete their videos.

- **Responsive Design**: The application is fully responsive, ensuring an optimal experience on mobile and desktop devices.

---

## Technologies Used

- **Frontend**:
  - **React**: For building the user interface.
  - **Vite**: A next-gen tool for fast, optimized builds and development.
  - **Tailwind css**: css framework.
  - **React Router**: For navigation between pages (Home, Video Player, Channel Page, etc.).

- **Backend**:
  - **Node.js**: Server-side JavaScript runtime.
  - **Express.js**: Web framework for Node.js.
  - **MongoDB**: NoSQL database to store user, video, channel, and comment data.
  - **JWT**: JSON Web Tokens for secure user authentication.

- **Authentication**:
  - JWT tokens are used for secure login sessions.

---

## Getting Started

### Prerequisites

Before you start, ensure you have the following installed:

- **Node.js** (version 16 or higher)
- **MongoDB** (MongoDB Atlas or a local MongoDB instance)
- **Git** (for version control)
- **A code editor** (e.g., Visual Studio Code)

### Clone the Repository

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/idmukesh/YouTube-Clone.git

2 cd YouTube-Clone

3 npm install

4 npm i react-router-dom react-redux @reduxjs/toolkit nodemon express mongoose 

5 Also install Tailwind CSS following the official Tailwind CSS setup guide.

### Start front end server

npm run dev

### start backend server

npm start

