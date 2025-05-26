import app from "./app";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`✅ Job Posting Service is running on http://localhost:${PORT}`);
});
