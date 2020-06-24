/**
* @swagger
* /api/v1/requestExams:
*   get:
*     security:
*       - Bearer: []
*     tags:
*       - Request Exam
*     summary: List Request Exam
*     parameters:
*       - name: created_at
*         in: query
*         type: string
*       - name: type_exam_id
*         in: query
*         type: integer
*         format: "int32"
*       - name: status
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
*       - Request Exam
*     summary: Create Request Exam
*     parameters:
*       - name: parameters
*         in: body
*         type: string
*         schema:
*           $ref: '#/definitions/NewRequestExam'
*     responses:
*       200:
*         description: Send hello message
*         example:
*           title: Hello Guess
*           text: Text
* /api/v1/requestExams/{id}:
*   get:
*     security:
*       - Bearer: []
*     tags:
*       - Request Exam
*     summary: Get Request Exam by id
*     parameters:
*       - name: id
*         description: Id of Request Exam
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
*       - Request Exam
*     summary: Update Request Exam
*     parameters:
*       - name: id
*         description: Id of Request Exam
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*       - name: Parameters
*         description: parameters
*         in: body
*         schema:
*           $ref: '#/definitions/NewRequestExam'
*     responses:
*       200:
*         description: Send hello message
*   delete:
*     security:
*       - Bearer: []
*     tags:
*       - Request Exam
*     summary: Delete Request Exam by id
*     parameters:
*       - name: id
*         description: Id of Request Exam
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
* /api/v1/requestExams/alterStatus/{id}:
*   patch:
*     security:
*       - Bearer: []
*     tags:
*       - Request Exam
*     summary: Update Status Request Exam
*     parameters:
*       - name: id
*         description: Id of Request Exam
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*       - name: Parameters
*         description: parameters
*         in: body
*         schema:
*           $ref: '#/definitions/UpdateStatusRequestExam'
*     responses:
*       200:
*         description: Send hello message
*/
