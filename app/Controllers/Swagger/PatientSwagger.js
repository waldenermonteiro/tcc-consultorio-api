
/**
* @swagger
* /api/v1/patients:
*   get:
*     security:
*       - Bearer: []
*     tags:
*       - Patient
*     summary: List Patients
*     parameters:
*       - name: name
*         in: query
*         type: string
*       - name: rg
*         in: query
*         type: string
*       - name: cpf
*         in: query
*         type: string
*     responses:
*       200:
*         example:
*           message: Hello Guess
*   post:
*     security:
*       - Bearer: []
*     tags:
*       - Patient
*     summary: Create Patient
*     parameters:
*       - name: parameters
*         in: body
*         type: string
*         schema:
*           $ref: '#/definitions/NewPatient'
*     responses:
*       200:
*         example:
*           message: Hello Guess
* /api/v1/Patients/{id}:
*   get:
*     security:
*       - Bearer: []
*     tags:
*       - Patient
*     summary: Get Patient by id
*     parameters:
*       - name: id
*         description: Id of Patient
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
*       - Patient
*     summary: Update Patient
*     parameters:
*       - name: id
*         description: Id of Patient
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*       - name: Parameters
*         description: parameters
*         in: body
*         schema:
*           $ref: '#/definitions/NewPatient'
*     responses:
*       200:
*         description: Send hello message
*   delete:
*     security:
*       - Bearer: []
*     tags:
*       - Patient
*     summary: Delete Patient by id
*     parameters:
*       - name: id
*         description: Id of Patient
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*/
