---

````markdown
# Music Playlist API

A GraphQL API built with Node.js, Apollo Server, Prisma ORM, and PostgreSQL hosted on Neon.

---

## 🚀 Features

- Add and list songs with details (title, artist, album)
- Create and list playlists
- Uses Prisma for database modeling and migrations
- PostgreSQL database hosted on Neon with separate dev and production branches

---

## 🛠️ Tech Stack

- Node.js
- Apollo Server (GraphQL)
- Prisma ORM
- PostgreSQL (Neon)
- dotenv for environment variables

---

## 📦 Installation & Setup

1. Clone the repo:

```bash
git clone https://github.com/YourUsername/music-playlist-manager.git
cd music-playlist-manager
````

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root based on `.env.example`:

```env
DATABASE_URL="your_neon_database_connection_string"
PORT=4000
```

4. Run Prisma migrations to set up the database schema:

```bash
npx prisma migrate dev --name init
```

5. Start the development server:

```bash
node src/index.js
```

6. Open your browser at [http://localhost:4000](http://localhost:4000) to access the Apollo Sandbox UI.

---

## 🔍 Example GraphQL Queries & Mutations

### Add a Song

```graphql
mutation {
  addSong(title: "Shape of You", artist: "Ed Sheeran", album: "Divide") {
    id
    title
    artist
    album
  }
}
```

### Get All Songs

```graphql
query {
  songs {
    id
    title
    artist
    album
  }
}
```

### Create a Playlist

```graphql
mutation {
  createPlaylist(name: "My Favorite Hits") {
    id
    name
  }
}
```

### Get All Playlists

```graphql
query {
  playlists {
    id
    name
  }
}
```

---

## 🌐 Deployment

* Backend hosted on [Railway](https://railway.app) (or your chosen platform).
* Connects to Neon PostgreSQL production branch.
* Set environment variables (`DATABASE_URL` and `PORT`) in your deployment platform.

---

## 🤝 Contributing

Feel free to open issues or submit pull requests.

---

## 📄 License

MIT License

---

## 📞 Contact

Your Name – [your.email@example.com](mailto:your.email@example.com)
Project Link: [https://github.com/YourUsername/music-playlist-manager](https://github.com/YourUsername/music-playlist-manager)

```

---

If you want, I can help you customize it further or add badges for build status, license, etc.
```
