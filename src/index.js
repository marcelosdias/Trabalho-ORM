const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');

const { PORT } = require('./config');

const Authentication = require('./middlewares/Authentication');

const app = express();
app.use(cors());
app.use(express.json());
app.use(Authentication.initialize());
app.use(routes);

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
