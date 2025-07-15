
# Blog Post RESTful API

A simple RESTful API for managing blog posts using Node.js, Express, Sequelize, and a SQL database.


## Features

- CRUD operations (Create, Read, Update, Delete) for blog posts
- Input validation
- Error handling
- Sequelize ORM with MySQL/PostgreSQL
- Environment variable support with `.env`

## Tech Tools

- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL
- Docker

## Install Dependencies
```bash
npm install
```

## Environment Variables

Make file `.env` in your root folder:

```env
PORT=5000
DB_HOST=db
DB_USER=postgres
DB_PASSWORD=jaringan123
DB_NAME=db_blog
DB_PORT=5432
```
Don't forget to Create Database in PostgreSQL with name `db_blog`


## Running Application
### with Terminal
```bash
npm run dev
```
This API Application will run in `http://localhost:5000`


### with Docker
Build & Start
```bash
docker-compose up --build
```

Stop & Clean
```bash
docker-compose down -v
```

# API Documentation
## Base URL
```bash
http://localhost:5000/blog
```

### ✅ GET "/blog"
Get all blog posts.
Response:
```
{
    "id": 1,
    "title": "First Post",
    "content": "Hello world!",
    "created_at": "2025-07-15T00:00:00.000Z",
    "updated_at": "2025-07-15T00:00:00.000Z"
}
```

### ✅ GET "/blog/:id"
Get all blog posts by ID.
Response:
```
{
    "id": 1,
    "title": "First Post",
    "content": "Hello world!",
    "created_at": "2025-07-15T00:00:00.000Z",
    "updated_at": "2025-07-15T00:00:00.000Z"
}
```

### ✅ POST "/blog"
Create a new post.\
Request Body :
```
{
    "title": "First Post",
    "content": "Hello world!"
}
```
Response :
```
[
  {
    "id": 1,
    "title": "First Post",
    "content": "Hello world!",
    "created_at": "2025-07-15T00:00:00.000Z",
    "updated_at": "2025-07-15T00:00:00.000Z"
  }
]
```

### ✅ PUT "/blog/:id"
Update a post by ID.\
Request Body :
```
{
    "title": "First Post Updated",
    "content": "Hello world!"
}
```
Response :
```
[
  {
    "id": 1,
    "title": "First Post Updated",
    "content": "Hello world!",
    "created_at": "2025-07-15T00:00:00.000Z",
    "updated_at": "2025-07-15T00:00:00.000Z"
  }
]
```

### ✅ DELETE "/blog/:id"
Delete a post by ID.
Response:
```
{
    "message": "Post deleted"
}
```