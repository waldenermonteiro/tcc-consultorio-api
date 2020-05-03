/**
* @swagger
* /api/v1/specialities:
*   get:
*     tags:
*       - Specialitie
*     summary: List Specialitie
*     parameters:
*       - name: title
*         description: Title of the Specialities
*         in: query
*         required: false
*         type: string
*     responses:
*       200:
*         description: Send hello message
*         example:
*           title: Hello Guess
*           text: Text
*   post:
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
