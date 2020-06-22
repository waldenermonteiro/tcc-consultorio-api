/**
* @swagger
* /api/v1/specialities:
*   get:
*     security:
*       - Bearer: []
*     tags:
*       - Specialitie
*     summary: List Specialitie
*     parameters:
*       - name: name
*         in: query
*         type: string
*     responses:
*       200:
*         description: Send hello message
*         example:
*           title: Hello Guess
*           text: Text
*   post:
*     security:
*       - Bearer: []
*     tags:
*       - Specialitie
*     summary: Create Specialitie
*     parameters:
*       - name: parameters
*         in: body
*         type: string
*         schema:
*           $ref: '#/definitions/NewSpecialitie'
*     responses:
*       200:
*         description: Send hello message
*         example:
*           title: Hello Guess
*           text: Text
* /api/v1/specialities/{id}:
*   get:
*     security:
*       - Bearer: []
*     tags:
*       - Specialitie
*     summary: Get Specialitie by id
*     parameters:
*       - name: id
*         description: Id of Specialitie
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
*       - Specialitie
*     summary: Update Specialitie
*     parameters:
*       - name: id
*         description: Id of Specialitie
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*       - name: Parameters
*         description: parameters
*         in: body
*         schema:
*           $ref: '#/definitions/NewSpecialitie'
*     responses:
*       200:
*         description: Send hello message
*   delete:
*     security:
*       - Bearer: []
*     tags:
*       - Specialitie
*     summary: Delete Specialitie by id
*     parameters:
*       - name: id
*         description: Id of Specialitie
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*/
