/** 
*  @swagger
* definitions:
*   NewUser:
*     type: object
*     required:
*       - username
*       - email
*       - password
*       - profile_id
*     properties:
*       username:
*         type: string
*       email:
*         type: string
*       password:
*         type: string
*         format: password
*       profile_id:
*         type: integer
*         format: "int32"
*   Login:
*     type: object
*     required:
*       - email
*       - password
*     properties:
*       email:
*         type: string
*       password:
*         type: string
*         format: password
*/