/**
 * @swagger
 * /api/v1/users/login:
 *   post:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - User
 *     summary: Login User
 *     parameters:
 *       - name: Parameters
 *         in: body
 *         type: string
 *         schema:
 *           $ref: '#/definitions/Login'
 *     responses:
 *       200:
 *         example:
 *           message: Hello Guess
 * /api/v1/users:
 *   get:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - User
 *     summary: List User
 *     responses:
 *       200:
 *         example:
 *           message: Hello Guess
 *   post:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - User
 *     summary: Create User
 *     parameters:
 *       - name: Parameters
 *         in: body
 *         type: string
 *         schema:
 *           $ref: '#/definitions/NewUser'
 *     responses:
 *       200:
 *         example:
 *           message: Hello Guess
 * /api/v1/users/{id}:
 *   get:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - User
 *     summary: Get User by id
 *     parameters:
 *       - name: id
 *         description: Id of user
 *         in: path
 *         required: true
 *         type: integer
 *         format: "int32"
 *     responses:
 *       200:
 *         description: Send hello message
 *   put:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - User
 *     summary: Update User
 *     parameters:
 *       - name: id
 *         description: Id of User
 *         in: path
 *         required: true
 *         type: integer
 *         format: "int32"
 *       - name: Parameters
 *         description: parameters
 *         in: body
 *         schema:
 *           $ref: '#/definitions/NewUser'
 *     responses:
 *       200:
 *         description: Send hello message
 *   delete:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - User
 *     summary: Delete User by id
 *     parameters:
 *       - name: id
 *         description: Id of User
 *         in: path
 *         required: true
 *         type: integer
 *         format: "int32"
 *     responses:
 *       200:
 *         description: Send hello message
 * /api/v1/users/alterPassword/{id}:
 *   patch:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - User
 *     summary: Update Password User
 *     parameters:
 *       - name: id
 *         description: Id of User
 *         in: path
 *         required: true
 *         type: integer
 *         format: "int32"
 *       - name: Parameters
 *         description: parameters
 *         in: body
 *         schema:
 *           $ref: '#/definitions/AlterPassword'
 *     responses:
 *       200:
 *         description: Send hello message
 */

