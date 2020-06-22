/**
* @swagger
* /api/v1/medicaments:
*   get:
*     security:
*       - Bearer: []
*     tags:
*       - Medicament
*     summary: List Medicament
*     parameters:
*       - name: name
*         in: query
*         type: string
*       - name: factory
*         in: query
*         type: string
*       - name: manufacturer
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
*     security:
*       - Bearer: []
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
*     security:
*       - Bearer: []
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
*     security:
*       - Bearer: []
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
