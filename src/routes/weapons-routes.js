const express = require('express');
const weaponsController = require('../controllers/weapons-controller');
const weaponsValidator = require('../validators/weapons-validator');
const validate = require('../middlewares/validate');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Weapons
 *   description: Weapons managements
 */

/**
 * @openapi
 * /weapons:
 *   get:
 *     summary: Load all the wheapons
 *     description: Load all the wheapons
 *     tags: [Weapons]
 *     parameters:
 *       - in: query
 *         name: code
 *         schema:
 *           type: string
 *         description: wheapon code
 *     responses:
 *       200:
 *         description: Wheapons list.
 */
router.get('/', validate(weaponsValidator.getWeapons), weaponsController.getWeapons);

/**
 * @openapi
 * /weapons:
 *   post:
 *     summary: Save a wheapon
 *     description: Save a wheapon
 *     tags: [Weapons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - type
 *               - country
 *               - caliber
 *               - mag
 *             properties:
 *               code:
 *                 type: string
 *                 description: wheapon code
 *               name:
 *                 type: string
 *                 description: wheapon name
 *               type:
 *                 type: string
 *                 enum: [user, admin]
 *                 description: wheapon type
 *               country:
 *                 type: string
 *                 description: made at
 *               caliber:
 *                 type: number
 *                 description: Nominal internal diameter of the gun barrel bore
 *               mag:
 *                 type: number
 *                 description: Ammunition capacity
 *             example:
 *               code: KJJ_67
 *               name: AK 67
 *               type: LMG
 *               country: USA
 *               caliber: .75
 *               mag: 24
 *     responses:
 *       200:
 *         description: Status message
 */
router.post('/', validate(weaponsValidator.createWeapon), weaponsController.createWeapon);

/**
 * @openapi
 * /weapons/{code}:
 *   get:
 *     summary: Load a wheapon
 *     description: Load a wheapon
 *     tags: [Weapons]
 *     parameters:
 *       - in: path
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *         description: wheapon code
 *     responses:
 *       200:
 *         description: A wheapon details
 */
router.get('/:code', validate(weaponsValidator.getWeapon), weaponsController.getWeapon);

/**
 * @openapi
 * /weapons/{code}:
 *   put:
 *     summary: Update a wheapon
 *     description: Update a wheapon
 *     tags: [Weapons]
 *     parameters:
 *       - in: path
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *         description: wheapon code
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - type
 *               - country
 *               - caliber
 *               - mag
 *             properties:
 *               code:
 *                 type: string
 *                 description: wheapon code
 *               name:
 *                 type: string
 *                 description: wheapon name
 *               type:
 *                 type: string
 *                 enum: [user, admin]
 *                 description: wheapon type
 *               country:
 *                 type: string
 *                 description: made at
 *               caliber:
 *                 type: number
 *                 description: Nominal internal diameter of the gun barrel bore
 *               mag:
 *                 type: number
 *                 description: Ammunition capacity
 *             example:
 *               code: KJJ_67
 *               name: AK 67
 *               type: LMG
 *               country: USA
 *               caliber: .75
 *               mag: 24
 *     responses:
 *       200:
 *         description: Status message
 */
router.put('/:code', validate(weaponsValidator.updateWeapon), weaponsController.updateWeapon);

/**
 * @openapi
 * /weapons/{code}:
 *   delete:
 *     summary: Delete a wheapon
 *     description: Delete a wheapon
 *     tags: [Weapons]
 *     parameters:
 *       - in: path
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *         description: wheapon code
 *     responses:
 *       200:
 *         description: Status message
 */
router.delete('/:code', validate(weaponsValidator.deleteWeapon), weaponsController.deleteWeapon);

module.exports = router;
