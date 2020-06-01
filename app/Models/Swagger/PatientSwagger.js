/** 
*  @swagger
* definitions:
*   NewPatient:
*     type: object
*     required:
*       - name
*       - birth_date
*       - rg
*       - cpf
*       - cep
*       - district
*       - complement
*       - address
*       - city
*       - state
*       - sex
*       - email
*       - password
*       - profile_id
*     properties:
*       name:
*         type: string
*       birth_date:
*         type: string
*         format: date
*       rg:
*         type: string
*       cpf:
*         type: string
*       cep:
*         type: string
*       district:
*         type: string
*       complement:
*         type: string
*       address:
*         type: string
*       city:
*         type: string
*       state:
*         type: string
*       sex:
*         type: string
*       email:
*         type: string
*       password:
*         type: string
*         format: password
*       profile_id:
*         type: integer
*         format: "int32"
*/