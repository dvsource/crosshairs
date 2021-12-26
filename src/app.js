const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

const morgon = require('./utils/morgon');
const swagger = require('./utils/swagger');
const { errorConverter, errorHandler } = require('./middlewares/error');

const weaponsRoute = require('./routes/weapons-route');

const app = express();

app.use(morgon.successHandler);
app.use(morgon.errorHandler);

app.use(helmet());
app.use(express.json());

app.use(compression());
app.use(cors());

app.use('/api-docs', ...swagger);

app.use('/weapons', weaponsRoute);

app.use(errorConverter);
app.use(errorHandler);

module.exports = app;
