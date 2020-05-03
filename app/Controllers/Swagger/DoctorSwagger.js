/**
* @swagger
* /api/v1/doctors:
*   get:
*     tags:
*       - Doctor
*     summary: List Doctor
*     parameters:
*       - name: title
*         description: Title of the Doctors
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
*       - Doctor
*     summary: Create Doctor
*     parameters:
*       - name: parameters
*         in: body
*         type: string
*         schema:
*           $ref: '#/definitions/NewDoctor'
*     responses:
*       200:
*         description: Send hello message
*         example:
*           title: Hello Guess
*           text: Text
* /api/v1/doctors/{id}:
*   get:
*     tags:
*       - Doctor
*     summary: Get Doctor by id
*     parameters:
*       - name: id
*         description: Id of Doctor
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*   put:
*     tags:
*       - Doctor
*     summary: Update Doctor
*     parameters:
*       - name: id
*         description: Id of Doctor
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*       - name: Parameters
*         description: parameters
*         in: body
*         schema:
*           $ref: '#/definitions/NewDoctor'
*     responses:
*       200:
*         description: Send hello message
*   delete:
*     tags:
*       - Doctor
*     summary: Delete Doctor by id
*     parameters:
*       - name: id
*         description: Id of Doctor
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*/
