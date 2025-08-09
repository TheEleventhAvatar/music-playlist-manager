> **Music Playlist Manager Backend API** — A Node.js + Express server,PostgreSQL,GraphQL,Prisma for managing music playlists and songs, deployed using Docker and Fly.io.

---

### README.md (Updated)

```markdown
# Music Playlist Manager Backend API

A simple **backend API** built with **Node.js** and **Express** for managing songs and playlists.  
Deployed using **Docker** and **Fly.io**.

---

## 🚀 Features
- Add, list, and manage songs (title, artist, album cover, audio link)
- Create and manage playlists
- REST API endpoints for easy integration with any frontend
- Environment variables for configuration using `dotenv`
- Containerized using Docker for portability
- Deployed to Fly.io

---

## 📂 Project Structure
```

.
├── index.js          # Entry point for the server
├── package.json      # Dependencies and scripts
├── Dockerfile        # Docker image build instructions
├── fly.toml          # Fly.io deployment config
└── .env              # Environment variables (not committed to GitHub)

````

---

## 🛠️ Local Development

1. **Clone the repository**
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
````

2. **Install dependencies**

```bash
npm install
```

3. **Set environment variables**
   Create a `.env` file:

```env
PORT=3000
```

4. **Run locally**

```bash
npm start
```

Server will run on `http://localhost:3000`

---

## 🐳 Docker Setup

1. **Build the image**

```bash
docker build -t playlist-api .
```

2. **Run the container**

```bash
docker run -p 3000:3000 --env-file .env playlist-api
```

---

## ☁️ Deploying to Fly.io

1. **Install Fly CLI**

```bash
curl -L https://fly.io/install.sh | sh
```

Restart your shell so `fly` command is available.

2. **Login to Fly.io**

```bash
fly auth login
```

3. **Create and configure your app**

```bash
fly launch
```

Choose your region and confirm creation.

4. **Deploy**

```bash
fly deploy
```

5. **Check logs**

```bash
fly logs
```

Your app will be live at:

```
https://<your-app-name>.fly.dev
```

---

## 📌 Notes

* This repo is **only the backend API**. A frontend can be built with React, Vue, etc., and connected to these endpoints.
* Docker is used to ensure the app runs the same locally and on Fly.io.
* Fly.io automatically builds and runs the Docker container in production.

---

## 📜 License

MIT License

```
