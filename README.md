# Backend Learning Projects

This repository contains a set of small Node.js and Express backend practice projects. The folders move from basic Node.js concepts to Express routing, EJS rendering, file-system CRUD, MongoDB/Mongoose, JWT authentication, data associations, and a small social-style mini project.

Each folder is its own Node.js project with its own `package.json`, dependencies, and entry file.

## Tech Stack

- Node.js
- Express.js
- EJS
- MongoDB
- Mongoose
- JWT
- bcrypt
- cookie-parser
- Multer
- Node.js `fs` module

## Folder Overview

| Folder | Entry file | Description |
| --- | --- | --- |
| `1-node-js` | `script.js` | Basic Node.js practice with command-line arguments, file-system operations, and a simple HTTP server example. |
| `2-node-express` | `express.js` | Express basics including routing, middleware, and error handling. |
| `3-form-handling` | `form.js` | Express body parsing using `express.json()` and `express.urlencoded()`. |
| `4-node-ejs` | `index.js` | EJS setup, static files, and dynamic route parameters. |
| `5-project` | `index.js` | File-based notes/tasks app using Express, EJS, and the Node.js `fs` module. |
| `6-mongo-db` | `app.js` | Basic MongoDB CRUD operations with Mongoose. |
| `7-project` | `app.js` | User CRUD app with EJS views, MongoDB, and Mongoose. |
| `8-jwt` | `app.js` | JWT, cookies, and bcrypt practice. |
| `9-jwt-adv` | `aap.js` | User registration and login with bcrypt password hashing, JWT cookies, and MongoDB. |
| `10-data-association` | `app.js` | Mongoose data association between users and posts. |
| `mini-project` | `app.js` | Mini social app with registration, login, posts, likes, edit/delete post flow, JWT authentication, and file upload setup. |

## Prerequisites

Install these before running the projects:

- Node.js
- npm
- MongoDB, required for `6-mongo-db`, `7-project`, `9-jwt-adv`, `10-data-association`, and `mini-project`

MongoDB projects expect MongoDB to run locally at:

```text
mongodb://127.0.0.1:27017
```

## How To Run

Open a terminal inside the folder you want to run, install dependencies if needed, then start the entry file.

Example:

```powershell
cd mini-project
npm install
node app.js
```

Then open:

```text
http://localhost:3000
```

All Express apps in this repository use port `3000`, so run only one project at a time or change the port in the project file.

## Run Commands By Folder

```powershell
cd 1-node-js
node script.js
```

```powershell
cd 2-node-express
npm install
node express.js
```

```powershell
cd 3-form-handling
npm install
node form.js
```

```powershell
cd 4-node-ejs
npm install
node index.js
```

```powershell
cd 5-project
npm install
node index.js
```

```powershell
cd 6-mongo-db
npm install
node app.js
```

```powershell
cd 7-project
npm install
node app.js
```

```powershell
cd 8-jwt
npm install
node app.js
```

```powershell
cd 9-jwt-adv
npm install
node aap.js
```

```powershell
cd 10-data-association
npm install
node app.js
```

```powershell
cd mini-project
npm install
node app.js
```

## MongoDB Database Names

These database names are currently hard-coded in the project files:

| Folder | Database |
| --- | --- |
| `6-mongo-db` | `nihal` |
| `7-project` | `nihal` |
| `9-jwt-adv` | `jwt` |
| `10-data-association` | `testingthedatabase` |
| `mini-project` | `miniproject` |

## Main Route Examples

### `5-project`

- `GET /` - show all text files from the `files` folder
- `POST /create` - create a new text file
- `GET /file/:filename` - read a file
- `GET /edit/:filename` - show edit page
- `POST /edit` - rename a file

### `6-mongo-db`

- `GET /create` - create a sample user
- `GET /read` - read users
- `GET /updated` - update a user
- `GET /delete` - delete a user

### `7-project`

- `GET /` - show create user form
- `POST /create` - create user
- `GET /read` - list users
- `GET /edit/:userid` - edit user page
- `POST /updated/:userid` - update user
- `GET /delete/:id` - delete user

### `9-jwt-adv`

- `GET /` - registration page
- `POST /create` - register user
- `GET /login` - login page
- `POST /login` - login user and set JWT cookie

### `10-data-association`

- `GET /create` - create a sample user
- `GET /post` - create a post and attach it to a user

### `mini-project`

- `GET /` - registration page
- `GET /login` - login page
- `POST /register` - register a user
- `POST /login` - login user
- `GET /profile` - show logged-in user's posts
- `POST /posts` - create a post
- `GET /like/:id` - like/unlike a post
- `GET /edit/:id` - edit post page
- `POST /update/:id` - update post
- `GET /delete/:id` - delete post
- `GET /logout` - clear cookie and logout
- `GET /test` - upload form page
- `POST /upload` - upload an image using Multer

For the upload route in `mini-project`, create this folder before uploading files:

```powershell
mkdir public\images\uploads
```

## Important Notes

- This is a learning/practice repository, so some values are intentionally simple and hard-coded.
- JWT secrets are written directly in files like `app.js` and `aap.js`; use environment variables before using this style in production.
- MongoDB connection strings are hard-coded for local development.
- Most `package.json` files do not define a `start` script, so run projects directly with `node`.
- `node_modules` folders are present in several projects, but they can always be recreated with `npm install`.

## Suggested Improvements

- Add `.env` files and use environment variables for MongoDB URLs and JWT secrets.
- Add `start` scripts to every `package.json`.
- Add a root `.gitignore` for `node_modules`.
- Add validation and better error handling to form and auth routes.
- Split larger app files into routes, controllers, models, and middleware as projects grow.
