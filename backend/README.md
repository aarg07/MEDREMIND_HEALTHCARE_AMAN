# Backend — MedRemind

Quick instructions to run the API locally for development.

Prerequisites
- Node.js 18+ and npm
- MongoDB connection (local or Atlas)

Environment
Create a `.env` file in `backend/` with these values:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/medremind
JWT_SECRET=replace_with_secure_secret
RESEND_API_KEY=replace_with_api_key_if_used
```

Run locally

```bash
cd backend
npm ci
npm run dev
```

Notes
- The project uses ES modules (`type: module`).
- Do not commit secrets or `.env` to the repository.
