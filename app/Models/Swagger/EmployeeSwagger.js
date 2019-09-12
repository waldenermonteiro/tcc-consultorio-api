/**
* @swagger
*  definitions:
*    NewEmployee:
*      type: object
*      properties:
*        name:
*          type: string
*        email:
*          type: string
*        password:
*          type: string
*          format: password
*        profile_id:
*         type: integer
*         format: "int32"
*      required:
*        - name
*        - email
*        - password
*        - profile_id
*/