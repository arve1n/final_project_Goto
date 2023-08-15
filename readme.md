# Tokopedia Play API

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

# Video Sharing Platform Database Schema

This section provides an overview of the database schema used in the video sharing platform backend. The schema is designed to store information about videos, comments, and products associated with videos.

## Entities and Fields

### Video

- `videoId` (String, Primary Key): Unique identifier for the video.
- `title` (String): Title of the video.
- `description` (String): Description of the video content.
- `url` (String): URL of the video.
- `createdAt` (Date): Timestamp of when the video was created.

### Comment

- `commentId` (String, Primary Key): Unique identifier for the comment.
- `videoId` (String, Foreign Key): Reference to the video that the comment is associated with.
- `name` (String): Name of the commenter.
- `comment` (String): Content of the comment.
- `createdAt` (Date): Timestamp of when the comment was created.

### Product

- `productId` (String, Primary Key): Unique identifier for the product.
- `videoId` (String, Foreign Key): Reference to the video that the product is associated with.
- `name` (String): Name of the product.
- `price` (Number): Price of the product.
- `createdAt` (Date): Timestamp of when the product was created.

## Relationships

- Each video can have multiple comments and products associated with it.
- Each comment and product is related to a specific video through the `videoId` reference.

## Schema Considerations

- The schema is designed to efficiently store and retrieve information related to videos, comments, and products.
- Proper indexing should be considered for fields used frequently for querying, such as `videoId` and `createdAt`.

