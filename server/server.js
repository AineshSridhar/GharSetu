const express = require('express');
const app = express();
const dotenv = require ('dotenv');
const cors = require('cors');
const {connectDB} = require("./configuration/connection");


const authRoute = require("./routes/auth");
const taskRoute = require("./routes/tasks");


dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(express.json());


app.use('/api/auth', authRoute);
app.use('/api/tasks', taskRoute);


app.get('/', (req, res) => {
    res.send("backend is working")
});


app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
})