
/**
* @swagger
* /api/v1/prescriptionMedicament:
*   get:
*     security:
*       - Bearer: []
*     tags:
*       - Prescription Medicament
*     summary: List Prescription Medicaments
*     responses:
*       200:
*         example:
*           message: Hello Guess
*   post:
*     security:
*       - Bearer: []
*     tags:
*       - Prescription Medicament
*     summary: Create Prescription Medicament
*     parameters:
*       - name: prescription
*         description: Prescription
*         in: body
*         required: true
*         schema:
*           $ref: '#/definitions/NewPrescriptionMedicament'
*     responses:
*       200:
*         example:
*           message: Hello Guess
* /api/v1/prescriptionMedicament/{id}:
*   get:
*     security:
*       - Bearer: []
*     tags:
*       - Prescription Medicament
*     summary: Get Prescription Medicament by id
*     parameters:
*       - name: id
*         description: Id of Prescription Medicament
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
*       - Prescription Medicament
*     summary: Update Prescription Medicament
*     parameters:
*       - name: id
*         description: Id of Prescription Medicament
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*       - name: Parameters
*         description: parameters
*         in: body
*         schema:
*           $ref: '#/definitions/NewPrescriptionMedicament'
*     responses:
*       200:
*         description: Send hello message
*   delete:
*     security:
*       - Bearer: []
*     tags:
*       - Prescription Medicament
*     summary: Delete Prescription Medicament by id
*     parameters:
*       - name: id
*         description: Id of Prescription Medicament
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*/
