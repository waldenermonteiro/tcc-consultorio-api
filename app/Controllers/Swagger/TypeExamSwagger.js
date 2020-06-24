/**
* @swagger
* /api/v1/typeExams:
*   get:
*     security:
*       - Bearer: []
*     tags:
*       - Type Exam
*     summary: List Type Exam
*     parameters:
*       - name: name
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
*       - Type Exam
*     summary: Create Type Exam
*     parameters:
*       - name: parameters
*         in: body
*         type: string
*         schema:
*           $ref: '#/definitions/NewTypeExam'
*     responses:
*       200:
*         description: Send hello message
*         example:
*           title: Hello Guess
*           text: Text
* /api/v1/typeExams/{id}:
*   get:
*     security:
*       - Bearer: []
*     tags:
*       - Type Exam
*     summary: Get Type Exam by id
*     parameters:
*       - name: id
*         description: Id of Type Exam
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
*       - Type Exam
*     summary: Update Type Exam
*     parameters:
*       - name: id
*         description: Id of Type Exam
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*       - name: Parameters
*         description: parameters
*         in: body
*         schema:
*           $ref: '#/definitions/NewTypeExam'
*     responses:
*       200:
*         description: Send hello message
*   delete:
*     security:
*       - Bearer: []
*     tags:
*       - Type Exam
*     summary: Delete Type Exam by id
*     parameters:
*       - name: id
*         description: Id of Type Exam
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*/
