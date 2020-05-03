/**
* @swagger
* /api/v1/medicaments:
*   get:
*     tags:
*       - Medicament
*     summary: List Medicament
*     parameters:
*       - name: title
*         description: Title of the Medicaments
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
*       - Medicament
*     summary: Create Medicament
*     parameters:
*       - name: parameters
*         in: body
*         type: string
*         schema:
*           $ref: '#/definitions/NewMedicament'
*     responses:
*       200:
*         description: Send hello message
*         example:
*           title: Hello Guess
*           text: Text
* /api/v1/medicaments/{id}:
*   get:
*     tags:
*       - Medicament
*     summary: Get Medicament by id
*     parameters:
*       - name: id
*         description: Id of Medicament
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*   put:
*     tags:
*       - Medicament
*     summary: Update Medicament
*     parameters:
*       - name: id
*         description: Id of Medicament
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*       - name: Parameters
*         description: parameters
*         in: body
*         schema:
*           $ref: '#/definitions/NewMedicament'
*     responses:
*       200:
*         description: Send hello message
*   delete:
*     tags:
*       - Medicament
*     summary: Delete Medicament by id
*     parameters:
*       - name: id
*         description: Id of Medicament
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*/
