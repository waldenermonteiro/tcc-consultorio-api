
/**
* @swagger
* /api/v1/patients:
*   get:
*     tags:
*       - Patient
*     summary: List Patients
*     responses:
*       200:
*         example:
*           message: Hello Guess
*   post:
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
