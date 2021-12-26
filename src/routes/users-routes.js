const express = require('express');
const usersController = require('../controllers/users-controller');
const userValidator = require('../validators/users-validator');
const validate = require('../middlewares/validate');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users managements
 */

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Load all the users
 *     description: Load all the users
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: username
 *         schema:
 *           type: string
 *         description: username
 *     responses:
 *       200:
 *         description: Users list.
 */
router.get('/', validate(userValidator.getUsers), usersController.getUsers);

/**
 * @openapi
 * /users:
 *   post:
 *     summary: Save a user
 *     description: Save a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *               - email
 *             properties:
 *               username:
 *                 type: string
 *                 description: username
 *               password:
 *                 type: string
 *                 description: password
 *               email:
 *                 type: string
 *                 description: email
 *             example:
 *               username: admin1
 *               password: pass1
 *               email: admin1@app1.com
 *     responses:
 *       200:
 *         description: Status message
 */
router.post('/', validate(userValidator.createUser), usersController.createUser);

/**
 * @openapi
 * /users/{code}:
 *   get:
 *     summary: Load a user
 *     description: Load a user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *         description: username
 *     responses:
 *       200:
 *         description: A user details
 */
router.get('/:code', validate(userValidator.getUser), usersController.getUser);

/**
 * @openapi
 * /users/{code}:
 *   put:
 *     summary: Update a user
 *     description: Update a user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *         description: username
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *               - email
 *             properties:
 *               username:
 *                 type: string
 *                 description: username
 *               password:
 *                 type: string
 *                 description: password
 *               email:
 *                 type: string
 *                 description: email
 *             example:
 *               username: admin1
 *               password: pass1
 *               email: admin1@app1.com
 *     responses:
 *       200:
 *         description: Status message
 */
router.put('/:code', validate(userValidator.updateUser), usersController.updateUser);

/**
 * @openapi
 * /users/{code}:
 *   delete:
 *     summary: Delete a user
 *     description: Delete a user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *         description: username
 *     responses:
 *       200:
 *         description: Status message
 */
router.delete('/:code', validate(userValidator.deleteUser), usersController.deleteUser);

module.exports = router;
