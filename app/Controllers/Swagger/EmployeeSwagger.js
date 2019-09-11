/**
* @swagger
* /api/v1/employees:
*   get:
*     tags:
*       - Employee
*     summary: List Employee
*     parameters:
*       - name: title
*         description: Title of the Employees
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
