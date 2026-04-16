# HNG Stage 1 API - Mustapha Nurudeen

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


## Issues Encountered and Fixed

### Ghost Process Conflict
After testing the API manually with `node index.js` multiple times,
a background process remained attached to port 3000 even after Ctrl+C.
This caused PM2 to be blocked from serving the updated code.

Diagnosed with: sudo lsof -i :3000
Fixed with: sudo kill -9 <PID>

### Response Time Optimization
Initial deployment failed the 500ms response time check.
Fixed by adding proxy_buffering off and tcp_nodelay on to the Nginx config,
which reduced response times from ~600ms to under 3ms.
