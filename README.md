# Global Tech Events
A Global Tech Event is a large-scale gathering where people from different countries come together to explore, share, and discuss the latest developments in technology.

## Project Overview

This project contains:

- Frontend: React + Vite (app code in this repo root)
- Backend: Node.js + Express (located at `main/server`)
- Database: MongoDB

## Backend (Node.js + Express + MongoDB)

Location: `main/server`

### Setup

1. Install dependencies:
   ```bash
   cd "c:\Users\sekar\OneDrive\Desktop\projects\main project 1\main\server"
   npm install
   ```

2. Configure environment:
   - `main/server/.env` includes:
     ```
     PORT=4000
     MONGODB_URI=mongodb://127.0.0.1:27017/main_app
     ```
   - Ensure MongoDB is running locally.

3. Run the server:
   ```bash
   npm run dev
   ```

### Endpoints

- `GET /` -> `{ ok: true, message: "Server is running" }`
- `GET /health` -> `{ status: "healthy" }`

## Frontend (React + Vite)

From the repo root:

```bash
npm install
npm run dev
```
