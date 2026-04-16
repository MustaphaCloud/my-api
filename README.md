# Stage 1 API - Mustapha Nurudeen

A simple REST API built with Node.js and Express, deployed on an AWS VPS
with Nginx as a reverse proxy and PM2 for process management.

## How to Run Locally

1. Clone the repository

   git clone https://github.com/MustaphaCloud/my-api.git
   cd my-api

2. Install dependencies

   npm install

3. Start the server

   node index.js

4. API will be available at http://localhost:3000

## Endpoints

| Endpoint | Method | Response |
|----------|--------|----------|
| /        | GET    | {"message": "API is running"} |
| /health  | GET    | {"message": "healthy"} |
| /me      | GET    | {"name": "Mustapha Nurudeen", "email": "mustaphanurudeen488@gmail.com", "github": "https://github.com/MustaphaCloud"} |

## Live Deployment

http://54.221.101.76

## Deployment Stack

- Server: AWS EC2 Ubuntu
- Runtime: Node.js 20 + Express
- Reverse Proxy: Nginx (port 80 -> port 3000)
- Process Manager: PM2 (auto-restarts on crash and reboot)
