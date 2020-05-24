/**
* @swagger
* /api/v1/employees:
*   get:
*     security:
*       - Bearer: []
*     tags:
*       - Employee
*     summary: List Employee
*     parameters:
*       - name: specialitie_id
*         in: query
*         type: integer
*         format: "int32"
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
*       - Employee
*     summary: Create Employee
*     parameters:
*       - name: parameters
*         in: body
*         type: string
*         schema:
*           $ref: '#/definitions/NewEmployee'
*     responses:
*       200:
*         description: Send hello message
*         example:
*           title: Hello Guess
*           text: Text
* /api/v1/employees/{id}:
*   get:
*     security:
*       - Bearer: []
*     tags:
*       - Employee
*     summary: Get Employee by id
*     parameters:
*       - name: id
*         description: Id of Employee
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
*       - Employee
*     summary: Update Employee
*     parameters:
*       - name: id
*         description: Id of Employee
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*       - name: Parameters
*         description: parameters
*         in: body
*         schema:
*           $ref: '#/definitions/NewEmployee'
*     responses:
*       200:
*         description: Send hello message
*   delete:
*     security:
*       - Bearer: []
*     tags:
*       - Employee
*     summary: Delete Employee by id
*     parameters:
*       - name: id
*         description: Id of Employee
*         in: path
*         required: true
*         type: integer
*         format: "int32"
*     responses:
*       200:
*         description: Send hello message
*/
