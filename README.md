# 🎧 Faftech Music API
<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/Multer-ff4444?style=for-the-badge" alt="Multer" />
  <img src="https://img.shields.io/badge/music--metadata-blue?style=for-the-badge" alt="music-metadata" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</p>

Faftech Music API is a lightweight Node.js + Express application designed to serve and upload `.mp3` audio files, complete with metadata duration extraction. It exposes two key endpoints: one for retrieving a list of available music files, and another for uploading new files.

---

## 📦 Features

- 🚀 Fast and simple API for `.mp3` files
- 📁 Static serving of uploaded audio
- 🕒 Extracts duration from audio metadata
- 🎯 Supports cross-origin requests (CORS)
- ⬆️ Upload `.mp3` via `multipart/form-data`

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- Multer (for handling file uploads)
- music-metadata (to parse audio metadata)
- TypeScript (optional)

---

## 📂 Folder Structure

```
faftech-music-api/
├── public/
│   └── audio/            # Uploaded .mp3 files are saved here
├── src/
│   └── index.ts          # Main Express app
├── package.json
├── tsconfig.json         # TypeScript config (if applicable)
└── README.md
```

---

## 🔧 Setup

### 1. Clone the repository

```bash
git clone https://github.com/fikriaf/Music-API.git
cd Music-API/faftech-music-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
npm start
```

Or with TypeScript (if available):

```bash
npx ts-node src/index.ts
```

---

## 📡 API Endpoints

### `GET /api/music`

Returns a list of all `.mp3` files with metadata:

**Response:**
```json
[
  {
    "id": 1,
    "title": "Sample Track",
    "file": "sample.mp3",
    "url": "/audio/sample.mp3",
    "duration": "2:34"
  }
]
```

### `POST /api/upload`

Upload `.mp3` file using `multipart/form-data`. Field name must be `file`.

**Request:**
```http
POST /api/upload
Content-Type: multipart/form-data
```

**Form field:**
- `file`: The `.mp3` file to upload

**Response:**
```json
{ "message": "Upload berhasil", "file": "track.mp3" }
```

---

## 🌍 CORS

CORS is enabled for all origins.

---

## 📝 License

MIT
