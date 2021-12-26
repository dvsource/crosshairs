const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

const morgon = require('./utils/morgon');
const swagger = require('./utils/swagger');
const { errorConverter, errorHandler } = require('./middlewares/error');

const usersRoutes = require('./routes/users-routes');
const weaponsRoutes = require('./routes/weapons-routes');

const app = express();

app.use(morgon.successHandler);
app.use(morgon.errorHandler);

app.use(helmet());
app.use(express.json());

app.use(compression());
app.use(cors());

app.use('/api-docs', ...swagger);

app.use('/users', usersRoutes);
app.use('/weapons', weaponsRoutes);

app.use(errorConverter);
app.use(errorHandler);

module.exports = app;
