const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRouter = require('./routes/tasksRoute');

const app = express();
app.use(cors({
    origin: '*',
}));

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/taskManager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/tasks', taskRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
