import fs from "fs";
import path from "path";
import express from "express";
import { parseStream } from "music-metadata";
import cors from "cors";

const app = express();

app.use(cors({
  origin: (origin, callback) => {
    callback(null, true); // Izinkan semua origin termasuk localhost
  },
  methods: ["GET", "HEAD", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));


const audioPath = path.join(__dirname, "../public/audio");
app.use("/audio", express.static(audioPath));

function capitalizeWords(str: string) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}

app.get("/api/music", async (req, res) => {
  const files = fs.readdirSync(audioPath).filter(f => f.endsWith(".mp3"));

  const musicList = await Promise.all(
    files.map(async (file, index) => {
      const fullPath = path.join(audioPath, file);
      let formattedDuration = "0:00";

      try {
        const stream = fs.createReadStream(fullPath);
        const metadata = await parseStream(stream, { mimeType: "audio/mpeg" }, { duration: true });
        const secondsTotal = Math.floor(metadata.format.duration || 0);
        const mins = Math.floor(secondsTotal / 60);
        const secs = secondsTotal % 60;
        formattedDuration = `${mins}:${secs.toString().padStart(2, "0")}`;
      } catch (err) {
        console.warn("Gagal baca durasi:", file, err);
      }

      return {
        id: index + 1,
        title: capitalizeWords(file.replace(/\.mp3$/, "").replace(/[-_]/g, " ")),
        file,
        url: `/audio/${file}`,
        duration: formattedDuration
      };
    })
  );

  res.json(musicList);
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`🎧 Music API jalan`);
});

