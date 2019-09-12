/** 
*  @swagger
* definitions:
*   NewPatient:
*     type: object
*     required:
*       - name
*       - email
*       - password
*       - birth_date
*       - address
*       - city
*       - state
*       - sex
*       - profile_id
*     properties:
*       name:
*         type: string
*       email:
*         type: string
*       password:
*         type: string
*         format: password
*       birth_date:
*         type: string
*         format: date
*       address:
*         type: string
*       city:
*         type: string
*       state:
*         type: string
*       sex:
*         type: string
*       profile_id:
*         type: integer
*         format: "int32"
*/