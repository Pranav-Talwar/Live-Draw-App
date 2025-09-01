import Express  from "express";
const app = Express();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("Hello from HTTP Backend!");
});
app.listen(PORT, () => {
    console.log(`HTTP Server listening on port ${PORT}`);
});