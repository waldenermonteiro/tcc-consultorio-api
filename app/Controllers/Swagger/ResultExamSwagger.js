/**
* @swagger
* /api/v1/resultExams:
*   get:
*     tags:
*       - Result Exam
*     summary: List Result Exam
*     parameters:
*       - name: title
*         description: Title of the Result Exams
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
*       - Result Exam
*     summary: Create Result Exam
*     parameters:
*       - name: parameters
*         in: body
*         type: string
*         schema:
*           $ref: '#/definitions/NewResultExam'
*     responses:
*       200:
*         description: Send hello message
*         example:
*           title: Hello Guess
*           text: Text
* /api/v1/resultExams/{id}:
*   get:
*     tags:
*       - Result Exam
*     summary: Get Result Exam by id
*     parameters:
*       - name: id
*         description: Id of Result Exam
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*   put:
*     tags:
*       - Result Exam
*     summary: Update Result Exam
*     parameters:
*       - name: id
*         description: Id of Result Exam
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*       - name: Parameters
*         description: parameters
*         in: body
*         schema:
*           $ref: '#/definitions/NewResultExam'
*     responses:
*       200:
*         description: Send hello message
*   delete:
*     tags:
*       - Result Exam
*     summary: Delete Result Exam by id
*     parameters:
*       - name: id
*         description: Id of Result Exam
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*/
