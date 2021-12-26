const Constants = require('./constants');

const handleResponse = (service, res) => {
  service
    .then((data = []) => res.json({ data, message: Constants.MESSAGE.RESPONSE.SUCCESS }))
    .catch((e) => res.json({ message: Constants.MESSAGE.RESPONSE.ERROR, e }));
};

module.exports = { handleResponse };
