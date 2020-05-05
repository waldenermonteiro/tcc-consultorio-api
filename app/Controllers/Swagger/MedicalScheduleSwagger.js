/**
* @swagger
* /api/v1/medicalSchedules:
*   get:
*     tags:
*       - Medical Schedule
*     summary: List Medical Schedule
*     parameters:
*       - name: title
*         description: Title of the Medical Schedules
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
*       - Medical Schedule
*     summary: Create Medical Schedule
*     parameters:
*       - name: parameters
*         in: body
*         type: string
*         schema:
*           $ref: '#/definitions/NewMedicalSchedule'
*     responses:
*       200:
*         description: Send hello message
*         example:
*           title: Hello Guess
*           text: Text
* /api/v1/medicalSchedules/{id}:
*   get:
*     tags:
*       - Medical Schedule
*     summary: Get Medical Schedule by id
*     parameters:
*       - name: id
*         description: Id of Medical Schedule
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*   put:
*     tags:
*       - Medical Schedule
*     summary: Update Medical Schedule
*     parameters:
*       - name: id
*         description: Id of Medical Schedule
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*       - name: Parameters
*         description: parameters
*         in: body
*         schema:
*           $ref: '#/definitions/NewMedicalSchedule'
*     responses:
*       200:
*         description: Send hello message
*   delete:
*     tags:
*       - Medical Schedule
*     summary: Delete Medical Schedule by id
*     parameters:
*       - name: id
*         description: Id of Medical Schedule
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*/
