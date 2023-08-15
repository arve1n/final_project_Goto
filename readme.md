# Video Sharing Platform API

This repository contains the backend API for a video sharing platform. The API is built using Node.js, Express, and MongoDB. It provides endpoints for fetching videos, comments, and product information related to videos.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/arve1n/final_project_Goto.git
    ```

2. Install dependencies:

    ```bash
    cd your-repo
    npm install
    ```

3. Create a `.env` file in the root directory and set your environment variables:

    ```env
    MONGO_URI=your-mongodb-uri
    PORT=5000
    ```

4. Start the server:

    ```bash
    npm start
    ```

    The server will run on `http://localhost:5000` or the port specified in your `.env` file.

## Endpoints

### Fetch all videos

- **URL**: `/api/videos`
- **Method**: GET
- **Response**: JSON array of video objects
- **Error Response**: Status 500 with error message

### Fetch comments for a video

- **URL**: `/api/video/:videoId/comments`
- **Method**: GET
- **Response**: JSON array of comment objects
- **Error Response**: Status 500 with error message

### Post comments for a video

- **URL**: `/api/video/:videoId/comments`
- **Method**: POST
- **Request Body**: JSON with `name` and `comment` fields
- **Response**: JSON object of the saved comment
- **Error Response**: Status 500 with error message

### Fetch product list

- **URL**: `/api/video/:videoId/products`
- **Method**: GET
- **Response**: JSON array of product objects
- **Error Response**: Status 500 with error message

### Show video detail

- **URL**: `/api/video/:videoId`
- **Method**: GET
- **Response**: JSON object of the video detail
- **Error Response**: Status 404 if video is not found, Status 500 with error message

## Dependencies

- `express`: Web framework for handling routes and requests.
- `mongoose`: MongoDB object modeling tool.
- `cors`: Middleware for enabling CORS.
- `dotenv`: Loading environment variables from a `.env` file.

