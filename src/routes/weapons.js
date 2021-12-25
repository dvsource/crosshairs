const express = require('express');

const router = express.Router();

const WEAPONS_SOURCE = [];

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
router.get('/', (req, res) => res.json(WEAPONS_SOURCE.filter((_) => _.code === req.query.code)));

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
router.post('/', (req, res) => {
  WEAPONS_SOURCE.push(req.body);
  res.json({ message: 'SUCCESS' });
});

/**
 * @openapi
 * /weapons/:code:
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
router.get('/:code', (req, res) => res.json(WEAPONS_SOURCE.find((_) => _.code === req.params.code)));

/**
 * @openapi
 * /weapons/:code:
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
router.put('/:code', (req, res) => {
  WEAPONS_SOURCE[WEAPONS_SOURCE.findIndex((_) => _.code === req.params.code)] = req.body;
  res.json({ message: 'SUCCESS' });
});

/**
 * @openapi
 * /weapons/:code:
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
router.delete('/:code', (req, res) => {
  WEAPONS_SOURCE.splice(
    WEAPONS_SOURCE.findIndex((_) => _.code === req.params.code),
    1
  );
  res.json({ message: 'SUCCESS' });
});

module.exports = router;
