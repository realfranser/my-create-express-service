import express from 'express';

const PORT = 8000;
const HOST = 'localhost';

const app = express();

app.get('/', (err, res) => {
    res.status(200);
    res.json({ working: true });
    res.end();
})

app.listen(PORT, HOST, () => {
    console.log(`Server listening at http://${HOST}:${PORT}`);
});

export default app;
