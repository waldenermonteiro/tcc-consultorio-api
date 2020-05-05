/**
* @swagger
* /api/v1/requestExams:
*   get:
*     tags:
*       - Request Exam
*     summary: List Request Exam
*     parameters:
*       - name: title
*         description: Title of the Request Exams
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
*/
