
/**
* @swagger
* /api/v1/profiles:
*   get:
*     security:
*       - Bearer: []
*     tags:
*       - Profile
*     summary: List Profiles
*     responses:
*       200:
*         example:
*           message: Hello Guess
*   post:
*     security:
*       - Bearer: []
*     tags:
*       - Profile
*     summary: Create Profile
*     parameters:
*       - name: name
*         description: Name
*         in: body
*         required: true
*         schema:
*           $ref: '#/definitions/NewProfile'
*     responses:
*       200:
*         example:
*           message: Hello Guess
* /api/v1/profiles/{id}:
*   get:
*     security:
*       - Bearer: []
*     tags:
*       - Profile
*     summary: Get Profile by id
*     parameters:
*       - name: id
*         description: Id of Profile
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
*       - Profile
*     summary: Update Profile
*     parameters:
*       - name: id
*         description: Id of Profile
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*       - name: Parameters
*         description: parameters
*         in: body
*         schema:
*           $ref: '#/definitions/NewProfile'
*     responses:
*       200:
*         description: Send hello message
*   delete:
*     security:
*       - Bearer: []
*     tags:
*       - Profile
*     summary: Delete Profile by id
*     parameters:
*       - name: id
*         description: Id of Profile
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*/
